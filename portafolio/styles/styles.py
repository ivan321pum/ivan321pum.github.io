import reflex as rx
from enum import Enum
from .fonts import Font
from .colors import TextColor, Color

class Size(Enum):
    SMALL = "0.5em"
    DEFAULT = "1em"
    BIG = "2em"
    VERY_BIG = "4em"


STYLESHEETS = [
    "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css",
    "https://fonts.googleapis.com/css2?family=Roboto&display=swap"
]

BASE_STYLE = {
    "font_family": Font.DEFAULT.value,
    "color": TextColor.main.value,
    "background": Color.secondary.value,
    "font_size": Size.DEFAULT.value
}
