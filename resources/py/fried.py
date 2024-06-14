import os
import json


# Define directory and file paths
directory = "json"
file_path = os.path.join(directory, "fried.json")

# Create directory if it doesn't exist
if not os.path.exists(directory):
    os.makedirs(directory)


# Define menu items

menu_items = [
  {"number": "F1","title": "Porco Frito c/ Molho", "image": "resources/img/F1.png"},
  {"number": "F2","title": "Panado de Gambas","pieces": "3 Peças" , "image": "resources/img/F2.png"},
  {"number": "F3","title": "Frango Frito c/ Amêndoas", "image": "resources/img/F3.png"},
  {"number": "F4","title": "Tempura de Gambas","pieces": "3 Peças" , "image": "resources/img/F4.png"},
  {"number": "F5","title": "Crepes Japoneses (Vegetais e Porco)","pieces": "2 Peças" , "image": "resources/img/F5.png"},
  {"number": "F6","title": "Lulas Fritas","pieces": "3 Peças" , "image": "resources/img/F6.png"},
  {"number": "F7","title": "Crepes (Queijo e Fiambre)","pieces": "2 Peças" , "image": "resources/img/F7.png"},
  {"number": "F8","title": "Frango Frito", "image": "resources/img/F8.png"},
  {"number": "F9","title": "Bolinhas de Sésamo","pieces": "3 Peças" , "image": "resources/img/F9.png"},
  {"number": "F10","title": "Tarte de Abóbora","pieces": "3 Peças" , "image": "resources/img/F10.png"},
  {"number": "F11","title": "Tempura de Legumes", "image": "resources/img/F11.png"},
  {"number": "F12","title": "Batata Frita", "image": "resources/img/F12.png"},
  {"number": "F14","title": "Asas de Frango","pieces": "3 Peças" , "image": "resources/img/F14.png"}
  
  
]

# Write menu items to JSON file
with open(file_path, 'w') as f:
    json.dump(menu_items, f, indent=2)