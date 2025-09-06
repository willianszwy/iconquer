import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'iconquer-achievements';

export const trophies = [
  { name: 'Bill the Pony', icon: '<svg width="1em" height="1em" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path style="fill:#CD916E;" d="M374.406,174.056c-0.048-0.256-0.146-0.499-0.29-0.717l-1.264-1.922l0.345-2.274 c2.069-13.651,1.071-26.81-2.964-39.109l-0.495-1.509l0.316-1.557c6.116-30.081,3.77-88.878-16.54-121.035 c-0.368-0.584-1-0.933-1.691-0.933c-0.146,0-0.293,0.017-0.435,0.048c-0.805,0.179-1.41,0.821-1.539,1.634l-0.052,0.323 l-0.086,0.314c-2.358,8.606-29.739,54.307-35.205,63.381l-2.268,3.766l-4.274-1.027c-16.403-3.942-31.636-4.531-39.257-4.531 c-2.215,0-3.736,0.05-4.446,0.079l-0.249,0.011l-0.249-0.01c-0.708-0.03-2.225-0.079-4.43-0.079c-7.659,0-22.965,0.594-39.429,4.571 l-4.278,1.034l-2.271-3.77c-5.469-9.081-32.871-54.813-35.231-63.423l-0.086-0.315l-0.032-0.2c-0.128-0.802-0.874-1.649-1.675-1.779 C176.225,5.009,176.118,5,176.012,5c-0.69,0-1.322,0.349-1.691,0.933c-20.334,32.196-16.743,82.373-15.129,97.176l0.553,3.484 l-2.497,2.181l-7.058,10.133c-3.664,5.26-2.095,12.522,3.412,15.802l0,0c-1.938,4.787-3.113,9.975-3.49,15.42l-0.019,0.273 l-0.043,0.27c-0.02,0.125-0.029,0.208-0.033,0.264l0.02,0.422l-0.011,0.252c-0.4,9.394,1.564,17.24,3.282,22.168l0.51,1.463 l-0.262,1.527c-8.504,49.598,0.716,108.086,24.665,156.455c2.65,5.352,5.494,10.569,8.245,15.615 c13.543,24.846,27.548,50.538,27.548,106.164c0,28.617,26.397,50,50,50h0.406c23.603,0,50-21.383,50-50 c0-55.626,14.004-81.318,27.548-106.164c2.75-5.046,5.595-10.264,8.245-15.615C374.688,283.785,383.732,224.282,374.406,174.056z"></path> <g> <path style="fill:#96695F;" d="M170.316,25.563c-8.618,23.224-9.007,50.517-7.816,69.324l0.676,10.675l8.757-6.143 c13.146-9.221,25.568-15.377,33.673-18.917l6.261-2.734l-3.52-5.855c-12.186-20.271-21.304-36.108-27.104-47.068L174.978,13 L170.316,25.563z"></path> <path style="fill:#96695F;" d="M367.689,120.936c1.311-20.683,4.551-61.095-8.765-89.783c-1.87-4.029-3.499-8.167-5.044-12.333 l-2.384-5.756l-7.191,13.591c-6.655,12.578-17.12,30.751-31.104,54.014C334.909,89.065,352.348,109.351,367.689,120.936z"></path> </g> <path style="fill:#E1A178;" d="M263.007,265L263.007,265c-17.673,0-32,14.327-32,32v136h64V297 C295.007,279.327,280.68,265,263.007,265z"></path> <g> <path style="fill:#96695F;" d="M307.517,418.365c-2.698-12.899-18.767-18.735-28.268-9.603c-0.082,0.079-0.162,0.158-0.242,0.238 c-8,8-16,8-16,8s-8,0-16-8c-0.08-0.08-0.161-0.159-0.242-0.238c-9.502-9.132-25.569-3.296-28.269,9.603 c-1.816,8.681-3.489,19.658-3.489,30.635c0,24,8,56,48,56s48-32,48-56C311.007,438.023,309.333,427.045,307.517,418.365z"></path> <path style="fill:#96695F;" d="M309.007,77c0,0-92-32.667-155,41c0,0,4.333,8.415,1,30.748c0,0,46,14.333,103-54 c0,0,11.333,21,8,25C266.007,119.748,306.007,98.333,309.007,77z"></path> </g> <path style="fill:#6E575A;" d="M264.03,483.61c-18.669,0-31.817-4.978-41.03-12.61c5.704,17.092,17.592,30.982,41.03,30.982 s35.326-13.89,41.03-30.982C295.847,478.632,282.699,483.61,264.03,483.61z"></path> <path d="M192.007,192c-8.823,0-16,7.178-16,16s7.177,16,16,16c8.822,0,16-7.178,16-16S200.829,192,192.007,192z"></path> <path d="M336.007,192c-8.822,0-16,7.178-16,16s7.178,16,16,16s16-7.178,16-16S344.829,192,336.007,192z"></path> <path d="M380.302,173.972c-0.2-1.08-0.609-2.067-1.178-2.93c2.521-16.635,0.478-30.686-3.195-41.879 c6.349-31.227,3.874-91.836-17.346-125.435c-1.805-2.856-5.207-4.271-8.506-3.536c-3.208,0.715-5.642,3.315-6.158,6.542 c-1.356,4.95-15.348,29.975-34.558,61.871c-22.106-5.312-42.136-4.746-45.354-4.613c-3.23-0.133-23.349-0.7-45.517,4.656 c-19.227-31.921-33.227-56.961-34.584-61.914c-0.516-3.227-2.95-5.827-6.157-6.542c-3.298-0.734-6.702,0.68-8.506,3.536 c-21.425,33.922-17.67,85.995-16.009,101.146c0.014,0.129,0.042,0.253,0.061,0.38c-8.455,7.384-16.682,16.05-23.816,26.122 c-2.554,3.605-1.701,8.598,1.904,11.152C132.787,143.523,134.4,144,136,144c2.507,0,4.976-1.175,6.535-3.376 c1.761-2.486,3.603-4.869,5.499-7.168c-2.289,5.651-3.516,11.5-3.915,17.257c-0.067,0.42-0.112,0.848-0.112,1.287 c0,0.119,0.013,0.235,0.018,0.353c-0.375,8.786,1.126,17.271,3.611,24.4c-8.72,50.86,0.619,110.482,25.201,160.131 c2.699,5.451,5.574,10.725,8.354,15.824c13.184,24.186,26.816,49.196,26.816,103.292c0,32.051,29.565,56,56,56h0.406 c26.435,0,56-23.949,56-56c0-54.097,13.632-79.106,26.815-103.292c2.78-5.1,5.654-10.374,8.354-15.824 C380.612,286.33,389.854,225.428,380.302,173.972z M175.772,26.648c5.013,9.474,13.353,24.209,27.264,47.354 c-8.506,3.715-21.247,10.054-34.717,19.503C167.296,77.355,167.238,49.646,175.772,26.648z M341.243,329.784 c-2.559,5.169-5.232,10.074-8.063,15.267c-14.144,25.946-28.768,52.775-28.768,110.95c0,24.417-23.691,40-40,40h-0.406 c-16.31,0-40-15.583-40-40c0-58.174-14.625-85.004-28.768-110.95c-2.83-5.193-5.503-10.098-8.063-15.267 c-21.162-42.741-30.34-93.225-25.495-137.981c0.995-0.212,1.968-0.599,2.858-1.21c3.641-2.503,4.563-7.484,2.06-11.125 c-0.91-1.324-1.823-3.014-2.669-4.979c-0.155-1.307-0.631-2.538-1.359-3.595c-1.091-3.307-1.942-7.115-2.334-11.165 c38.634-2.506,73.777-22.7,102.066-58.793c2.726-3.478,2.116-8.506-1.361-11.231c-3.478-2.726-8.506-2.116-11.231,1.361 c-25.177,32.123-54.824,49.753-88.238,52.535c1.042-3.81,2.684-7.551,5.104-11.035c2.521-3.628,1.624-8.614-2.004-11.135 c-1.178-0.819-2.5-1.271-3.834-1.392c23.303-21.558,49.741-32.064,56.456-34.505c23.163-6.625,46.173-5.556,46.396-5.544 c0.273,0.014,0.554,0.014,0.828,0c0.186-0.008,16.438-0.766,35.351,2.909c-10.961,13.04-26.8,25.433-38.438,29.562 c-4.164,1.478-6.342,6.051-4.864,10.215c1.164,3.279,4.248,5.327,7.54,5.327c0.888,0,1.791-0.149,2.675-0.462 c17.122-6.076,39.456-24.586,51.951-43.057c0.406-0.6,0.711-1.238,0.936-1.893c0.137-0.187,0.268-0.381,0.39-0.582 c16.887-27.874,26.56-44.893,32.123-55.413c8.715,22.655,11.714,53.317,10.632,77.502c-2.802-3.61-4.904-5.624-5.239-5.938 c-3.215-3.009-8.241-2.841-11.265,0.359c-3.025,3.199-2.882,8.254,0.302,11.295c1.124,1.074,27.377,26.815,13.834,71.884 c-1.271,4.231,1.128,8.692,5.359,9.964c0.348,0.104,0.696,0.176,1.044,0.232C371.57,236.627,362.392,287.072,341.243,329.784z"></path> <path d="M253.341,458.038c-3.724-3.332-5.825-13.273-5.354-25.328c0.014-0.363,0.02-0.604,0.02-0.71c0-4.418-3.582-8-8-8 c-4.375,0-7.929,3.511-7.999,7.868l-0.009,0.217c-0.399,10.222,0.456,28.735,10.673,37.877c1.527,1.366,3.433,2.038,5.332,2.038 c2.196,0,4.385-0.9,5.965-2.666C256.915,466.042,256.634,460.984,253.341,458.038z"></path> <path d="M295.921,431.873c-0.068-4.36-3.623-7.873-7.999-7.873c-4.418,0-8,3.582-8,8c0,0.105,0.005,0.344,0.019,0.704 c0.456,11.902-1.652,22.107-5.245,25.392c-3.262,2.981-3.488,8.042-0.507,11.302c1.578,1.727,3.738,2.602,5.907,2.602 c1.927,0,3.86-0.693,5.396-2.096c9.991-9.135,10.828-27.612,10.438-37.813L295.921,431.873z"></path> </g></svg>', quote: '"Mesmo o menor dos seres pode mudar o curso do futuro." — J.R.R. Tolkien' },
  { name: 'Mafagafo', icon: '🌀', quote: '"O absurdo é o tempero que transforma o impossível em divertido."' },
  { name: 'Elizabeth Bennet', icon: '<svg width="1em" height="1em" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 511.999 511.999" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path style="fill:#F4BD64;" d="M311.108,24.194V9.146H296.06c-18.818,0-34.072,15.255-34.072,34.072v15.048h15.048 C295.854,58.267,311.108,43.012,311.108,24.194z"></path> <path style="fill:#4EB79B;" d="M286.32,231.378c5.536,1.926,11.596,1.651,16.889-0.868c28.297-13.458,47.859-42.305,47.859-75.726 c0-46.289-37.525-89.81-83.814-59.829c-46.289-29.981-83.814,13.54-83.814,59.829c0,33.42,19.562,62.268,47.859,75.726 c5.293,2.517,11.353,2.793,16.889,0.868"></path> <path style="fill:#40A084;" d="M252.893,231.382h-4.694c-5.538,1.925-11.599,1.652-16.9-0.868 c-28.297-13.465-47.859-42.309-47.859-75.728c0-40.17,28.273-78.259,65.995-68.015c-10.601,7.285-17.732,37.032-17.732,68.015 c0,33.419,8.295,62.263,20.299,75.728C252.299,230.835,252.584,231.132,252.893,231.382z"></path> <path style="fill:#D37250;" d="M453.365,503.321H101.682c-21.102,0-40.223-8.563-54.058-22.398 c-13.82-13.835-22.383-32.941-22.383-54.058c0-42.219,34.223-76.457,76.441-76.457h351.683"></path> <rect x="249.799" y="381.552" style="fill:#E6E6E6;" width="214.242" height="96.26"></rect> <path style="fill:#F4BD64;" d="M458.695,232.639H250.134v0.067c-0.589-0.039-1.182-0.067-1.783-0.067H39.791v35.654h19.606v46.468 H39.791v35.654h208.561c0.6,0,1.193-0.027,1.783-0.067v0.067h208.561c14.57,0,26.395-11.825,26.395-26.395v-64.996 C485.091,244.452,473.265,232.639,458.695,232.639z"></path> <path style="fill:#E88158;" d="M487.218,394.097H291.81c-18.059,0-32.753,14.708-32.753,32.767 c0,18.073,14.694,32.767,32.753,32.767h195.409v43.689H291.81c-21.102,0-40.223-8.563-54.058-22.398 c-13.82-13.835-22.383-32.941-22.383-54.058c0-42.219,34.223-76.457,76.441-76.457h195.409v43.69H487.218z"></path> <rect x="59.402" y="254.982" style="fill:#CCCCCC;" width="190.402" height="73.09"></rect> <path style="fill:#DDA758;" d="M39.791,314.761h199.303v-46.468H39.791v-35.654h208.561c14.57,0,26.396,11.813,26.396,26.384v64.996 c0,14.57-11.825,26.396-26.395,26.396H39.791V314.761z"></path> <path d="M486.987,402.778c4.924,0,8.913-3.991,8.913-8.913v-43.69c0-4.233-2.953-7.77-6.911-8.679 c3.034-5.21,4.782-11.258,4.782-17.71v-64.996c0-19.463-15.84-35.297-35.309-35.297h-40.832c-4.924,0-8.913,3.991-8.913,8.913 s3.99,8.913,8.913,8.913h40.832c9.64,0,17.482,7.837,17.482,17.47v64.996c0,9.602-7.781,17.413-17.368,17.476H278.786 c2.95-5.157,4.646-11.119,4.646-17.474v-64.996c0-6.355-1.697-12.317-4.649-17.474H387.92c4.924,0,8.913-3.991,8.913-8.913 s-3.99-8.913-8.913-8.913H328.97c19.218-17.36,30.782-42.393,30.782-68.94c0-30.934-15.16-59.961-37.721-72.228 c-14.907-8.104-31.754-8.444-48.438-1.223c-1.023-4.291-2.455-9.226-4.425-14.154h7.638c23.701,0,42.985-19.284,42.985-42.985V8.913 c0-4.923-3.99-8.913-8.913-8.913H295.83c-23.701,0-42.985,19.284-42.985,42.985v1.455c-4.135-2.733-8.982-4.394-14.664-4.394 c-4.923,0-8.913,3.991-8.913,8.913s3.991,8.913,8.913,8.913c7.334,0,12.81,10.337,16.206,20.95 c-14.669-4.73-29.269-3.622-42.368,3.5c-22.563,12.267-37.721,41.294-37.721,72.228c0,26.548,11.565,51.582,30.784,68.942H39.562 c-4.923,0-8.913,3.991-8.913,8.913v35.654c0,4.923,3.991,8.913,8.913,8.913h10.696v28.642H39.562c-4.923,0-8.913,3.991-8.913,8.913 v35.654c0,4.923,3.991,8.913,8.913,8.913h9.768c-20.194,15.627-33.233,40.079-33.233,67.534c0,22.79,8.875,44.225,24.994,60.361 c16.127,16.127,37.563,25.009,60.36,25.009h385.537c4.924,0,8.913-3.991,8.913-8.913v-43.689c0-4.923-3.99-8.913-8.913-8.913h-14.26 v-47.706H486.987z M270.671,42.985c0-13.873,11.286-25.158,25.158-25.158h6.135v6.135c0,13.873-11.286,25.158-25.158,25.158h-6.135 V42.985z M234.897,222.228c-25.984-12.358-42.774-38.923-42.774-67.676c0-24.211,11.682-47.471,28.41-56.568 c12.495-6.792,26.893-5.334,41.645,4.22c2.946,1.909,6.741,1.91,9.691,0c14.752-9.554,29.152-11.012,41.646-4.22 c16.727,9.095,28.41,32.357,28.41,56.568c0,28.753-16.79,55.318-42.775,67.676C295.999,223.727,238.048,223.727,234.897,222.228z M48.475,341.271v-17.827h82.74c4.923,0,8.913-3.991,8.913-8.913c0-4.923-3.991-8.913-8.913-8.913H68.085v-28.642h161.867v28.642 h-69.025c-4.923,0-8.913,3.991-8.913,8.913c0,4.923,3.991,8.913,8.913,8.913h77.939c4.923,0,8.913-3.991,8.913-8.913v-46.468 c0-4.923-3.991-8.913-8.913-8.913H48.475v-17.827h199.648c9.639,0,17.482,7.838,17.482,17.47v64.996 c0,9.582-7.75,17.38-17.31,17.474H101.45c-0.115,0-0.228,0.008-0.343,0.008L48.475,341.271L48.475,341.271z M478.074,494.173h-24.94 H291.579c-18.036,0-34.995-7.027-47.756-19.786c-3.481-3.481-9.125-3.481-12.605,0c-3.481,3.481-3.481,9.125,0,12.605 c2.591,2.591,5.331,4.972,8.179,7.182H101.45c-18.035,0-34.995-7.027-47.752-19.783c-12.753-12.766-19.777-29.728-19.777-47.759 c0-37.128,30.108-67.347,67.185-67.534h138.349c-20.194,15.627-33.233,40.079-33.233,67.534c0,13.302,2.979,26.053,8.855,37.897 c2.188,4.409,7.536,6.213,11.946,4.024c4.409-2.188,6.212-7.536,4.024-11.946c-4.643-9.36-6.998-19.445-6.998-29.975 c0-37.166,30.169-67.412,67.3-67.537h167.113c0.076,0,0.152-0.005,0.228-0.006h19.382v25.863H291.579 c-22.974,0-41.666,18.698-41.666,41.68s18.692,41.68,41.666,41.68h186.495V494.173z M454.9,450.485H291.579 c-13.145,0-23.839-10.701-23.839-23.853c0-13.153,10.694-23.853,23.839-23.853H454.9L454.9,450.485L454.9,450.485z"></path> </g></svg>', quote: '"Coragem é a graça sob pressão." — Ernest Hemingway' },
  { name: 'Don\'t panic! & Thanks for the fish', icon: '🐟', quote: '"O universo é grande, estranho e cheio de peixes; sorria e continue nadando."' },
  { name: 'Timão & Pumba', icon: '🐗', quote: '"Às vezes, a melhor estratégia é rir, comer e seguir em frente."' },
  { name: 'Steve Wozniak', icon: '💻', quote: '"A melhor maneira de prever o futuro é inventá-lo." — Alan Kay' },
  { name: 'Inigo Montoya', icon: '⚔️', quote: '"Caia sete vezes e levante-se oito." — Provérbio japonês' },
  { name: 'Carmen Sandiego', icon: '🕵️‍♀️', quote: '"Não é o destino que importa, mas a viagem." — T.S. Eliot' },
  { name: 'Jack Reacher', icon: '🥊', quote: '"A coragem não é ausência de medo, mas a decisão de que algo é mais importante que ele." — Ambrose Redmoon' },
  { name: 'John Wick', icon: '🐶', quote: '"O homem que se ergue é mais forte do que o que nunca caiu." — Viktor Frankl' },
  { name: 'Geralt', icon: '🐺', quote: '"O homem que conquista a si mesmo é mais poderoso do que aquele que conquista mil homens em batalha." — Buda' },
  { name: 'Musashi', icon: '🏯', quote: '"Perceba o que não pode ser visto a olho nu." — Miyamoto Musashi' },
  { name: 'Asterix & Obelix', icon: '💪', quote: '"A alegria evita mil males e prolonga a vida." — William Shakespeare' },
  { name: 'Cheshire Cat', icon: '😼', quote: '"Não se perca no tempo: nós somos feitos dele." — Jorge Luis Borges' },
  { name: 'Scadufax', icon: '<svg width="1em" height="1em" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path style="fill:#6E5B3F;" d="M370.308,162.868c8.77,8.976,17.24,18.693,25.322,29.25 c102.3,133.627,105.733,262.874,105.733,262.874h-66.56c0,0-33.286-215.372-181.193-297.709c4.768-22.459-1.098-46.307-8.921-65.645 c-2.077-5.134-5.887-8.459-10.245-10.03l1.012-2.884c34.609,12.096,73.029,30.918,108.746,60.221 C353.111,146.252,361.839,154.205,370.308,162.868z"></path> <path style="fill:#FFF3E6;" d="M253.608,157.283c147.907,82.337,181.193,297.709,181.193,297.709H256.062 c-10.245,0-18.564-8.211-18.726-18.445c-0.431-27.097-6.209-80.928-39.699-140.289c-11.418,7.039-25.515,11.741-41.379,13.01 c-18.058,1.442-39.516,16.788-57.768,33.361l-55.638-37.526l-1.173-0.753l113.406-177.308c15.572,1.464,30.315,4.208,44.273,8.049 l11.816-41.658c3.1-10.934,14.324-15.056,23.267-11.827c4.358,1.571,8.168,4.896,10.245,10.03 C252.511,110.976,258.376,134.823,253.608,157.283z"></path> <path style="fill:#6E5B3F;" d="M235.454,78.723l-1.012,2.884c-8.943-3.228-20.167,0.894-23.267,11.827l-11.816,41.658 c-13.958-3.842-28.701-6.587-44.273-8.049l-31.704-70.036C123.383,57.006,173.284,57.006,235.454,78.723z"></path> <path style="fill:#DBB67E;" d="M42.854,305.105l55.638,37.526c-7.555,6.855-14.56,13.925-20.544,20.307 c-12.268,13.075-31.887,16.056-47.459,7.178l-16.444-9.374c-3.357-1.916-4.434-6.253-2.346-9.513l29.982-46.877L42.854,305.105z"></path> <path d="M178.665,206.879c-5.875,0-10.637,4.762-10.637,10.637c0,3.938-3.203,7.141-7.141,7.141c-3.932,0-7.13-3.204-7.13-7.141 c0-5.875-4.762-10.637-10.637-10.637c-5.875,0-10.637,4.762-10.637,10.637c0,15.669,12.742,28.415,28.404,28.415 c15.668,0,28.415-12.747,28.415-28.415C189.302,211.641,184.54,206.879,178.665,206.879z"></path> <path d="M8.777,369.983l16.443,9.374c7.69,4.385,16.117,6.515,24.472,6.515c13.281,0,26.375-5.385,36.014-15.658 c6.709-7.156,13.378-13.751,19.829-19.61c0.007-0.006,0.015-0.014,0.021-0.02c0.028-0.026,0.056-0.052,0.085-0.078 c26.47-24.035,42.596-29.925,51.466-30.632c12.883-1.032,25.202-4.205,36.2-9.267c28.016,53.752,33.005,101.628,33.393,126.109 c0.251,15.944,13.423,28.915,29.361,28.915h178.74h66.56c2.87,0,5.619-1.159,7.622-3.216c2.002-2.056,3.088-4.835,3.012-7.703 c-0.039-1.471-1.133-36.638-16.436-89.331c-1.638-5.641-7.538-8.886-13.182-7.248c-5.642,1.638-8.886,7.54-7.248,13.182 c9.629,33.157,13.345,59.218,14.758,73.042h-46.192c-3.538-18.16-13.342-61.52-34.21-111.444 c-15.908-38.053-34.973-71.958-56.669-100.774c-25.648-34.066-55.066-61.082-87.525-80.4c1.923-15.945-0.254-33.502-6.468-52.398 c25.571,11.206,49.109,25.019,70.314,41.263l-9.063,11.139c-3.708,4.557-3.019,11.257,1.538,14.964 c1.973,1.605,4.347,2.387,6.707,2.387c3.09,0,6.156-1.34,8.258-3.924l9.004-11.068c3.389,2.979,6.719,6.031,9.976,9.153 l-9.767,10.707c-3.959,4.34-3.651,11.068,0.689,15.027c2.039,1.862,4.607,2.778,7.165,2.778c2.886,0,5.763-1.168,7.862-3.469 l8.921-9.78c2.644,2.911,5.243,5.874,7.779,8.887l-9.901,10.652c-4,4.303-3.754,11.034,0.55,15.034 c2.049,1.904,4.647,2.845,7.24,2.845c2.853,0,5.698-1.14,7.794-3.395l7.628-8.207c25.377,34.07,46.546,70.787,62.96,109.25 c1.724,4.041,5.655,6.465,9.788,6.464c1.392,0,2.808-0.276,4.17-0.856c5.404-2.305,7.914-8.555,5.608-13.959 c-18.039-42.267-41.579-82.501-69.968-119.583c-8.085-10.562-16.887-20.729-26.162-30.22c-8.495-8.688-17.568-17.004-26.967-24.71 c-0.01-0.007-0.019-0.015-0.029-0.023c-0.002-0.001-0.003-0.003-0.005-0.004c-0.002-0.002-0.004-0.003-0.007-0.005 c-32.259-26.458-69.921-47.321-111.945-62.008c-63.147-22.059-113.467-22.313-115.578-22.313c-3.613,0-6.98,1.835-8.938,4.872 c-1.959,3.037-2.242,6.86-0.752,10.152l29.324,64.779L2.741,345.492c-2.558,3.995-3.375,8.929-2.241,13.535 C1.635,363.636,4.65,367.629,8.777,369.983z M70.19,355.659c-8.943,9.53-23.102,11.675-34.434,5.215l-12.898-7.352l3.373-5.274 l4.884,3.242c1.81,1.202,3.854,1.776,5.874,1.776c3.444,0,6.824-1.67,8.871-4.754c3.25-4.894,1.917-11.497-2.977-14.745 l-5.188-3.444l7.091-11.086l36.755,24.79C77.781,347.725,73.988,351.607,70.19,355.659z M389.658,340.643 c18.663,44.527,28.302,84.409,32.309,103.712H256.062c-4.391,0-8.02-3.578-8.09-7.977c-0.421-26.59-5.85-78.724-36.459-136.857 c23.301-18.348,32.701-45.635,24.006-71.829c-1.85-5.576-7.869-8.596-13.446-6.745c-5.576,1.851-8.596,7.87-6.745,13.446 c6.54,19.704-2.376,39.939-23.272,52.809c-10.403,6.412-23.075,10.377-36.644,11.463c-16.188,1.292-35.605,11.566-57.788,30.549 L56.252,301.31l104.249-162.993c8.682,1.038,17.25,2.525,25.626,4.428l-0.1,0.352c-1.605,5.652,1.675,11.534,7.327,13.139 c5.653,1.605,11.534-1.675,13.139-7.327l3.102-10.934c0.006-0.021,0.015-0.04,0.02-0.062c0.004-0.016,0.006-0.031,0.011-0.047 l11.784-41.534c0.57-2.014,1.72-3.475,3.416-4.345c1.824-0.934,4.07-1.075,6.009-0.377c1.84,0.664,3.184,2.014,3.992,4.012 c9.126,22.558,11.947,42.537,8.39,59.379c-0.015,0.069-0.032,0.137-0.046,0.206c-1.469,6.825-4.029,13.176-7.616,18.877 c-3.128,4.972-1.634,11.539,3.339,14.668c1.759,1.107,3.719,1.636,5.655,1.636c3.535,0,6.992-1.762,9.013-4.974 c2.411-3.833,4.477-7.873,6.197-12.084C326.556,215.522,367.102,286.828,389.658,340.643z M205.902,80.685 c-2.231,2.864-3.921,6.183-4.959,9.846l-9,31.721c-9.693-2.246-19.62-3.972-29.678-5.146l-21.937-48.461 C155.096,70,178.427,73.192,205.902,80.685z"></path> <path d="M470.508,324.413c-5.513,2.027-8.34,8.142-6.311,13.655c0.571,1.554,1.131,3.099,1.677,4.633 c1.552,4.353,5.648,7.067,10.019,7.067c1.185,0,2.392-0.2,3.573-0.621c5.533-1.973,8.419-8.059,6.446-13.592 c-0.571-1.6-1.153-3.209-1.75-4.83C482.135,325.21,476.023,322.384,470.508,324.413z"></path> </g></svg>', quote: '"A velocidade não é nada sem direção." — Provérbio chinês' },
  { name: 'Harry Vanderspeigle', icon: '👽', quote: '"Às vezes, ser estranho é apenas o primeiro passo para ser extraordinário." — Clarissa Pinkola Estés' },
  { name: 'Tiffany Aching', icon: '🥾', quote: '"O que você faz com o que tem é o que define quem você é." — Madeline L\'Engle' },
  { name: 'Calcifer', icon: '🔥', quote: '"Aqueles que não acreditam em magia jamais a encontrarão." — Roald Dahl' },
  { name: '10ª Doctor', icon: '⏳', quote: '"O tempo é muito lento para os que esperam, muito rápido para os que temem, muito longo para os que sofrem, muito curto para os que se alegram, mas para os que amam, o tempo é eternidade." — Henry Van Dyke' },
  { name: 'Lúthien Tinúviel', icon: '✨', quote: '"A imaginação é o verdadeiro começo da criação." — George Bernard Shaw' }
];

const motivationalMessages = [
  "🎉 Incrível! Você conquistou um novo troféu!",
  "🌟 Parabéns! Sua dedicação está valendo a pena!",
  "🚀 Fantástico! Você está evoluindo!",
  "💪 Excelente! Continue assim!",
  "🏆 Uau! Mais um troféu na sua coleção!",
  "✨ Brilhante! Você é imparável!",
  "🔥 Sensacional! Que conquista incrível!"
];

export const useAchievements = () => {
  const [achievements, setAchievements] = useState([]);
  const [currentDay, setCurrentDay] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [currentYear, setCurrentYear] = useState(new Date());

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setAchievements(JSON.parse(stored));
    }
  }, []);

  const saveToStorage = useCallback((newAchievements) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newAchievements));
    setAchievements(newAchievements);
  }, []);

  const generateId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  };

  const getLocalDateString = (date = new Date()) => {
    // Fix timezone issue by adjusting for local timezone
    const localDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
    return localDate.toISOString().split('T')[0];
  };

  const addAchievement = useCallback((achievement) => {
    const newAchievement = {
      ...achievement,
      id: generateId(),
      createdAt: new Date().toISOString(),
      achievementDate: achievement.achievementDate || getLocalDateString()
    };
    const newAchievements = [...achievements, newAchievement];
    saveToStorage(newAchievements);
    return newAchievement;
  }, [achievements, saveToStorage]);

  const updateAchievement = useCallback((id, updates) => {
    const newAchievements = achievements.map(achievement => 
      achievement.id === id ? { ...achievement, ...updates } : achievement
    );
    saveToStorage(newAchievements);
  }, [achievements, saveToStorage]);

  const deleteAchievement = useCallback((id) => {
    const newAchievements = achievements.filter(achievement => achievement.id !== id);
    saveToStorage(newAchievements);
  }, [achievements, saveToStorage]);

  const getAchievementsByDay = useCallback((date) => {
    const targetDate = date.toDateString();
    return achievements.filter(achievement => {
      if (!achievement.achievementDate) return false;
      const achievementDate = new Date(achievement.achievementDate);
      return achievementDate.toDateString() === targetDate;
    });
  }, [achievements]);

  const getAchievementsByMonth = useCallback((date) => {
    const targetMonth = date.getMonth();
    const targetYear = date.getFullYear();
    return achievements.filter(achievement => {
      if (!achievement.achievementDate) return false;
      const achievementDate = new Date(achievement.achievementDate);
      return achievementDate.getMonth() === targetMonth && 
             achievementDate.getFullYear() === targetYear;
    });
  }, [achievements]);

  const getAchievementsByYear = useCallback((date) => {
    const targetYear = date.getFullYear();
    return achievements.filter(achievement => {
      if (!achievement.achievementDate) return false;
      const achievementDate = new Date(achievement.achievementDate);
      return achievementDate.getFullYear() === targetYear;
    });
  }, [achievements]);

  const calculateTrophy = useCallback((achievementCount, period) => {
    let trophyIndex = 0;
    
    if (period === 'day') {
      if (achievementCount === 0) trophyIndex = 0;
      else if (achievementCount <= 2) trophyIndex = Math.min(achievementCount - 1, 19);
      else trophyIndex = Math.min(achievementCount + 1, 19);
    } else if (period === 'month') {
      const weeksInMonth = 4;
      const avgPerWeek = achievementCount / weeksInMonth;
      trophyIndex = Math.min(Math.floor(avgPerWeek * 4), 19);
    } else if (period === 'year') {
      const monthsInYear = 12;
      const avgPerMonth = achievementCount / monthsInYear;
      trophyIndex = Math.min(Math.floor(avgPerMonth * 2), 19);
    }
    
    return trophies[Math.max(0, Math.min(trophyIndex, 19))];
  }, []);

  const getCurrentTrophies = useCallback(() => {
    const today = new Date();
    const dayAchievements = getAchievementsByDay(today);
    const monthAchievements = getAchievementsByMonth(today);
    const yearAchievements = getAchievementsByYear(today);
    
    return {
      day: calculateTrophy(dayAchievements.length, 'day'),
      month: calculateTrophy(monthAchievements.length, 'month'),
      year: calculateTrophy(yearAchievements.length, 'year')
    };
  }, [getAchievementsByDay, getAchievementsByMonth, getAchievementsByYear, calculateTrophy]);

  const navigateDay = useCallback((direction) => {
    const newDate = new Date(currentDay);
    newDate.setDate(newDate.getDate() + direction);
    setCurrentDay(newDate);
  }, [currentDay]);

  const navigateMonth = useCallback((direction) => {
    const newDate = new Date(currentMonth);
    newDate.setMonth(newDate.getMonth() + direction);
    setCurrentMonth(newDate);
  }, [currentMonth]);

  const navigateYear = useCallback((direction) => {
    const newDate = new Date(currentYear);
    newDate.setFullYear(newDate.getFullYear() + direction);
    setCurrentYear(newDate);
  }, [currentYear]);

  const getRandomMotivationalMessage = useCallback(() => {
    return motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];
  }, []);

  return {
    achievements,
    currentDay,
    currentMonth,
    currentYear,
    addAchievement,
    updateAchievement,
    deleteAchievement,
    getAchievementsByDay,
    getAchievementsByMonth,
    getAchievementsByYear,
    calculateTrophy,
    getCurrentTrophies,
    navigateDay,
    navigateMonth,
    navigateYear,
    getRandomMotivationalMessage
  };
};