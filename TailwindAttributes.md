# Tailwind CSS Utility Classes

## Layout

### Container
- `container`: Centra il contenuto e imposta la larghezza massima.
  ```html
  <div class="container mx-auto">
    <!-- Content -->
  </div>
  ```

### Display
- `block`: Imposta l'elemento come `block`.
- `inline-block`: Imposta l'elemento come `inline-block`.
- `inline`: Imposta l'elemento come `inline`.
- `flex`: Imposta l'elemento come un contenitore flessibile.
- `inline-flex`: Imposta l'elemento come un contenitore flessibile inline.
- `grid`: Imposta l'elemento come un contenitore a griglia.
- `inline-grid`: Imposta l'elemento come un contenitore a griglia inline.
- `hidden`: Nasconde l'elemento.
  ```html
  <div class="flex">
    <!-- Flex items -->
  </div>
  ```

### Position
- `static`: Posizione statica.
- `relative`: Posizione relativa.
- `absolute`: Posizione assoluta.
- `fixed`: Posizione fissa.
- `sticky`: Posizione sticky.
- `top-0`, `right-0`, `bottom-0`, `left-0`: Posizionamento degli elementi.
  ```html
  <div class="relative top-0">
    <!-- Positioned content -->
  </div>
  ```

### Z-Index
- `z-0`, `z-10`, `z-20`, `z-30`, `z-40`, `z-50`, `z-auto`: Gestisce la proprietà `z-index`.
  ```html
  <div class="z-10">
    <!-- Content with z-index -->
  </div>
  ```

## Spacing

### Padding
- `p-0`, `p-1`, `p-2`, ..., `p-12`: Imposta il padding.
- `pt-0`, `pr-0`, `pb-0`, `pl-0`: Padding per singoli lati.
  ```html
  <div class="p-4">
    <!-- Content with padding -->
  </div>
  ```

### Margin
- `m-0`, `m-1`, `m-2`, ..., `m-12`: Imposta il margine.
- `mt-0`, `mr-0`, `mb-0`, `ml-0`: Margine per singoli lati.
- `mx-0`, `my-0`: Margine per assi x e y.
  ```html
  <div class="m-4">
    <!-- Content with margin -->
  </div>
  ```

## Sizing

### Width
- `w-0`, `w-1`, `w-2`, ..., `w-full`, `w-screen`: Imposta la larghezza.
  ```html
  <div class="w-full">
    <!-- Full width content -->
  </div>
  ```

### Height
- `h-0`, `h-1`, `h-2`, ..., `h-full`, `h-screen`: Imposta l'altezza.
  ```html
  <div class="h-screen">
    <!-- Full height content -->
  </div>
  ```

## Typography

### Font Size
- `text-xs`, `text-sm`, `text-base`, `text-lg`, `text-xl`, `text-2xl`, ..., `text-9xl`: Dimensione del testo.
  ```html
  <h1 class="text-4xl">Heading</h1>
  ```

### Font Weight
- `font-thin`, `font-extralight`, `font-light`, `font-normal`, `font-medium`, `font-semibold`, `font-bold`, `font-extrabold`, `font-black`: Peso del font.
  ```html
  <p class="font-bold">Bold text</p>
  ```

### Text Alignment
- `text-left`, `text-center`, `text-right`, `text-justify`: Allineamento del testo.
  ```html
  <p class="text-center">Centered text</p>
  ```

### Text Color
- `text-transparent`, `text-black`, `text-white`, `text-gray-500`, ..., `text-red-500`, ..., `text-blue-500`: Colore del testo.
  ```html
  <p class="text-blue-500">Blue text</p>
  ```

### Line Height
- `leading-none`, `leading-tight`, `leading-snug`, `leading-normal`, `leading-relaxed`, `leading-loose`: Altezza della linea.
  ```html
  <p class="leading-loose">Loose leading text</p>
  ```

## Background

### Background Color
- `bg-transparent`, `bg-black`, `bg-white`, `bg-gray-500`, ..., `bg-red-500`, ..., `bg-blue-500`: Colore di sfondo.
  ```html
  <div class="bg-gray-200">
    <!-- Gray background -->
  </div>
  ```

### Background Size
- `bg-auto`, `bg-cover`, `bg-contain`: Dimensione dello sfondo.
  ```html
  <div class="bg-cover">
    <!-- Cover background -->
  </div>
  ```

### Background Position
- `bg-bottom`, `bg-center`, `bg-left`, `bg-left-bottom`, `bg-left-top`, `bg-right`, `bg-right-bottom`, `bg-right-top`, `bg-top`: Posizione dello sfondo.
  ```html
  <div class="bg-center">
    <!-- Centered background -->
  </div>
  ```

## Border

### Border Width
- `border`, `border-0`, `border-2`, `border-4`, `border-8`: Larghezza del bordo.
  ```html
  <div class="border-2">
    <!-- Border width -->
  </div>
  ```

### Border Color
- `border-transparent`, `border-black`, `border-white`, `border-gray-500`, ..., `border-red-500`, ..., `border-blue-500`: Colore del bordo.
  ```html
  <div class="border-red-500">
    <!-- Red border -->
  </div>
  ```

### Border Radius
- `rounded`, `rounded-none`, `rounded-sm`, `rounded-md`, `rounded-lg`, `rounded-xl`, `rounded-2xl`, `rounded-3xl`, `rounded-full`: Raggio del bordo.
  ```html
  <div class="rounded-full">
    <!-- Full rounded border -->
  </div>
  ```

## Flexbox and Grid

### Flex Direction
- `flex-row`, `flex-row-reverse`, `flex-col`, `flex-col-reverse`: Direzione dei figli in un contenitore flessibile.
  ```html
  <div class="flex flex-col">
    <!-- Flex column direction -->
  </div>
  ```

### Flex Wrap
- `flex-nowrap`, `flex-wrap`, `flex-wrap-reverse`: Gestisce il wrapping dei figli.
  ```html
  <div class="flex flex-wrap">
    <!-- Flex wrap -->
  </div>
  ```

### Align Items
- `items-start`, `items-center`, `items-end`, `items-baseline`, `items-stretch`: Allineamento degli elementi lungo l'asse trasversale.
  ```html
  <div class="flex items-center">
    <!-- Items centered -->
  </div>
  ```

### Justify Content
- `justify-start`, `justify-center`, `justify-end`, `justify-between`, `justify-around`, `justify-evenly`: Distribuzione degli elementi lungo l'asse principale.
  ```html
  <div class="flex justify-between">
    <!-- Justify content between -->
  </div>
  ```

### Gap
- `gap-0`, `gap-1`, `gap-2`, ..., `gap-12`: Spazio tra gli elementi.
  ```html
  <div class="grid gap-4">
    <!-- Grid with gap -->
  </div>
  ```

## Interactivity

### Opacity
- `opacity-0`, `opacity-25`, `opacity-50`, `opacity-75`, `opacity-100`: Opacità dell'elemento.
  ```html
  <div class="opacity-50">
    <!-- 50% opacity -->
  </div>
  ```

### Cursor
- `cursor-auto`, `cursor-default`, `cursor-pointer`, `cursor-wait`, `cursor-text`, `cursor-move`, `cursor-not-allowed`: Tipo di cursore.
  ```html
  <div class="cursor-pointer">
    <!-- Pointer cursor -->
  </div>
  ```

## Effects

### Box Shadow
- `shadow`, `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-xl`, `shadow-2xl`: Ombra dell'elemento.
  ```html
  <div class="shadow-lg">
    <!-- Large shadow -->
  </div>
  ```

### Transition
- `transition`, `transition-none`, `transition-all`, `transition-colors`, `transition-opacity`, `transition-shadow`, `transition-transform`: Effetti di transizione.
  ```html
  <div class="transition duration-500 ease-in-out transform hover:scale-110">
    <!-- Transition with transform -->
  </div>
  ```

### Transform
- `transform`, `transform-none`, `scale-0`, `scale-50`, `scale

-75`, `scale-90`, `scale-95`, `scale-100`, `scale-105`, `scale-110`, `scale-125`, `scale-150`: Trasformazioni dell'elemento.
  ```html
  <div class="transform scale-110">
    <!-- Scaled content -->
  </div>
  ```
```