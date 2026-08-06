"""
Anonymisation des captures de dashboards : logos remplaces par un cartouche
« LOGO », textes identifiants (slogans, mentions legales) effaces sur le fond.
On repart des exports d'origine pour n'encoder qu'une seule fois en WebP.

Usage :
    cd tools && python3 anonymize-screenshots.py

Les exports bruts (non masques) sont attendus dans un dossier `drive/` a cote
de ce script. Ils ne sont PAS versionnes : ils contiennent les logos clients,
c'est precisement ce qu'on masque ici. Seules les versions masquees partent
dans public/projects/.

Ce fichier sert aussi de trace : il documente exactement quelles zones de
quelle capture ont ete masquees.

Dependances : pillow, numpy.
"""

from PIL import Image, ImageDraw, ImageFont
import numpy as np
import os

SRC = "drive"
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "public", "projects")


def font(size, bold=True):
    name = "DejaVuSans-Bold.ttf" if bold else "DejaVuSans.ttf"
    try:
        return ImageFont.truetype(f"/usr/share/fonts/truetype/dejavu/{name}", size)
    except Exception:
        return ImageFont.load_default()


def sample_bg(im, box, pad=6):
    """Couleur de fond dominante dans l'anneau qui entoure la zone."""
    x0, y0, x1, y1 = box
    a = np.array(im.convert("RGB"))
    h, w, _ = a.shape
    ring = []
    for yy in range(max(0, y0 - pad), min(h, y1 + pad)):
        for xx in (range(max(0, x0 - pad), x0), range(x1, min(w, x1 + pad))):
            for x in xx:
                ring.append(a[yy, x])
    if not ring:
        return (255, 255, 255)
    arr = np.array(ring)
    # mediane : insensible aux quelques pixels de texte qui depassent
    return tuple(int(v) for v in np.median(arr, axis=0))


def luminance(c):
    return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]


def logo_box(im, box, label="LOGO"):
    """Cartouche neutre a la place d'un logo, lisible sur fond clair ou sombre."""
    d = ImageDraw.Draw(im)
    bg = sample_bg(im, box)
    dark = luminance(bg) < 128
    fill = (46, 52, 64) if dark else (233, 235, 238)
    stroke = (120, 130, 148) if dark else (168, 174, 184)
    text = (188, 195, 208) if dark else (110, 117, 128)

    d.rectangle(box, fill=fill)
    # bordure en tirets : marque clairement une zone masquee
    x0, y0, x1, y1 = box
    dash = 5
    for x in range(x0, x1, dash * 2):
        d.line([(x, y0), (min(x + dash, x1), y0)], fill=stroke)
        d.line([(x, y1 - 1), (min(x + dash, x1), y1 - 1)], fill=stroke)
    for y in range(y0, y1, dash * 2):
        d.line([(x0, y), (x0, min(y + dash, y1))], fill=stroke)
        d.line([(x1 - 1, y), (x1 - 1, min(y + dash, y1))], fill=stroke)

    size = max(8, min((y1 - y0) // 2, (x1 - x0) // (len(label) * 0.72)))
    d.text(((x0 + x1) / 2, (y0 + y1) / 2), label, anchor="mm",
           fill=text, font=font(int(size)))


def redact(im, box, label=None, color=None):
    """Efface un texte identifiant en le remplacant par le fond local.

    `color` force la teinte quand la zone touche un bord (l'echantillonnage
    ramasserait alors la couleur voisine au lieu de celle du fond).
    """
    d = ImageDraw.Draw(im)
    bg = color or sample_bg(im, box)
    d.rectangle(box, fill=bg)
    if label:
        x0, y0, x1, y1 = box
        dark = luminance(bg) < 128
        col = (150, 158, 172) if dark else (140, 146, 156)
        size = max(9, min(15, (y1 - y0) // 3))
        d.text(((x0 + x1) / 2, (y0 + y1) / 2), label, anchor="mm",
               fill=col, font=font(int(size), bold=False))


def copy_bg_rows(im, box, src_x):
    """Recopie le fond de la meme ligne depuis une zone vide (raccord invisible)."""
    a = np.array(im.convert("RGB"))
    x0, y0, x1, y1 = box
    w = x1 - x0
    for y in range(y0, y1):
        a[y, x0:x1] = a[y, src_x:src_x + w]
    return Image.fromarray(a)


JOBS = [
    # ---------- IRIS-IT ----------
    ("iris1.png", "iris-home", [
        ("logo", (605, 70, 760, 210), "LOGO"),
        ("redact", (285, 258, 1090, 338), "slogan client masqué"),
        ("redact", (435, 370, 1010, 448), None),
    ]),
    ("iris2.png", "iris-overview", [
        ("logo", (30, 10, 92, 76), "LOGO"),
        ("logo", (116, 12, 188, 76), "LOGO"),
    ]),
    ("iris3.png", "iris-commandes", [
        ("logo", (30, 10, 92, 76), "LOGO"),
        ("logo", (116, 12, 224, 74), "LOGO"),
    ]),
    # ---------- KPMG ----------
    ("kpmg.PNG", "kpmg-cover", [
        ("logo", (152, 100, 245, 146), "LOGO"),
        ("redact", (160, 230, 380, 254), None),
        ("redact", (176, 546, 250, 586), None),
    ]),
    ("kpmg1.JPG", "kpmg-report", [
        ("tabfix", (826, 48, 942, 76), 980),
        ("logo", (10, 4, 90, 40), "LOGO"),
        ("redact", (18, 748, 672, 796), None),
    ]),
    # ---------- Magpharm ----------
    ("mg1.png", "magpharm-home", [
        ("logo", (44, 76, 200, 126), "LOGO"),
        # vignette de droite : logo et slogan minuscules, dans la barre rouge
        ("redact", (434, 133, 469, 151), None, (197, 8, 8)),
        ("redact", (448, 268, 470, 289), None, (197, 8, 8)),
    ]),
    ("overview.png", "magpharm-overview", [
        ("logo", (14, 34, 208, 94), "LOGO"),
        ("redact", (92, 706, 210, 762), None),
    ]),
    ("focus sell-in.png", "magpharm-sellin", [
        ("logo", (14, 34, 208, 94), "LOGO"),
        ("redact", (92, 706, 210, 762), None),
    ]),
    ("Marketing.png", "magpharm-marketing", [
        ("logo", (14, 34, 208, 94), "LOGO"),
        ("redact", (92, 706, 210, 762), None),
    ]),
]

for src, name, ops in JOBS:
    im = Image.open(os.path.join(SRC, src)).convert("RGB")
    for op in ops:
        kind, box = op[0], op[1]
        if kind == "logo":
            logo_box(im, box, op[2])
        elif kind == "redact":
            redact(im, box, op[2], op[3] if len(op) > 3 else None)
        elif kind == "tabfix":
            im = copy_bg_rows(im, box, op[2])
    w, h = im.size
    if w > 1600:
        im = im.resize((1600, round(h * 1600 / w)), Image.LANCZOS)
    path = os.path.join(OUT, f"{name}.webp")
    im.save(path, quality=88, method=6)
    print(f"{name:22s} {im.size}  {os.path.getsize(path)//1024:4d} KB")
