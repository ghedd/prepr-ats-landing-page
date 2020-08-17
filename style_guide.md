###### [Introduction](README.md) > **Style Guide**

# Style Guide

## Colors

### Primary

    cl_primary_1: : #EF4857
    cl_primary_2: : #072e50
    cl_primary_3: : #fafafa

### Secondary

    clr_secondary_1: #35526a
    clr_secondary_2: #7E9eba
    clr_secondary_3: #0e0e0e
    clr_secondary_4: #c4c4c4

## Typography

    Font size: 18px
    Family: san-serif

### Section Headings, Call-to-actions, Navigation

    Family: Roboto Condensed
    Weights: 400, 700

### Body text

    Family: Roboto
    Weights: 400

### Button shadow properties

    box-shadow:
              1px 2px 10px rgba(0, 0, 0, 0.08),
              2px 12px 20px rgba(0, 0, 0, 0.1);

## Class naming convention (...not again?)

Too many conventions eh? But I think it would worth it, as we will have easy-to-track blocks of CSS code. I would recommend applying BEM method to achieve the mentioned goal.

### BEM (Block, Element, Modifier )

This convention basically have 3 parts:

1.  the core part is _block_ which is the base style of your component(s);
2.  the _element_ is every smaller part that your block consists of. Let's take a look of the following example, saying we have a card component and:
    This is how CSS would look like with BEM:

    ```css
    .card {
    }
    .card__title {
    }
    .card__content {
    }
    ```

    And this is how it is written in HTML:

    ```html
    <div class="card">
      <h3 class="card__title">Title</h3>
      <p class="card__content">Lorem Ipsum</p>
    </div>
    ```

3.  the _modifier_ is simply a class defining of some changes we would apply to our component. The modifier is declared with double hypen (--), for example:
    **CSS:**

    ```css
    .card {
      background-color: white;
      color: black;
      /* everything else */
    }

    /* say we want a dark-mode card,
     we can write it as follows */
    .card--dark {
      background-color: black;
      color: white;
    }
    ```

    **HTML**

    ```html
    <div class="card card--dark">
      <h3 class="card__title">Title</h3>
      <p class="card__content">Lorem Ipsum</p>
    </div>
    ```
    When adding the modifier, what we defined in `card--dark` will overide just the needed code, and the other remains the same.
    
That was quite a long writing. For more information about BEM, please check out [BEM-101](https://css-tricks.com/bem-101/)  and [Get BEM](http://getbem.com/introduction/).

**[Click here](README.md)** to return to Introduction Page.
