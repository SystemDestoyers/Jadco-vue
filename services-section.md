# Services Section - Stacked Scroll Animation

## Implementation Overview

The Services Section features a sophisticated stacked scroll animation that presents each service in a visually engaging manner as users scroll down the page. This implementation creates a layered effect where services are initially stacked on top of each other, and as the user scrolls, each service transitions out of view to reveal the next service beneath it.

## Technical Implementation Details

### HTML Structure

The HTML structure consists of:
1. A main services section container with a tall height to accommodate scrolling
2. A services-layer-container that manages the fixed positioning during scroll
3. Multiple service-stack-item elements, each representing a distinct service
4. Consistent internal structure within each service item

```html
<section id="services" class="services-section py-5 section">
  <div class="container">
    <div class="services-layer-container">
      <!-- Service 1 -->
      <div class="service-stack-item" data-service="1">
        <div class="service-item-wrapper">
          <div class="container-fluid">
            <div class="row align-items-center full-screen md-h-auto">
              <div class="col-lg-6">
                <div class="service-image">
                  <!-- Service image -->
                </div>
              </div>
              <div class="col-lg-6">
                <div class="service-content">
                  <!-- Service content -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Additional service items (2, 3, 4) with identical structure -->
    </div>
  </div>
</section>
```

### CSS Implementation

The CSS establishes the positioning system and visual properties:

```css
.services-section {
  position: relative;
  overflow: visible;
}

.services-layer-container {
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
}

.services-layer-container.fixed {
  position: fixed;
}

.service-stack-item {
  height: 100vh;
  width: 100%;
  position: absolute;
  overflow: hidden;
  display: flex;
  align-items: flex-start;
  transition: height 0.3s ease-out, box-shadow 0.3s ease-out;
  top: 0;
}

.service-stack-item .container-fluid {
  padding: 0;
}

.service-stack-item .row {
  margin: 0;
}

.full-screen {
  height: 100vh;
}
```

### JavaScript Implementation

The JavaScript handles the complex interactions and scroll-based animations:

1. **Initialization**
   - Sets z-index values for proper stacking (higher index for first service)
   - Positions all items at the top with full viewport height
   - Adds data attributes for targeting
   - Establishes consistent content positioning

2. **Scroll Handling**
   - Tracks scroll position relative to the section
   - Calculates which service is currently transitioning
   - Determines progress within each transition (0 to 1)
   - Applies height changes based on scroll progress
   - Manages the darkening overlay effect

3. **Container Positioning**
   - Switches the container between absolute and fixed positioning
   - Ensures smooth transitions at section boundaries
   - Maintains proper positioning with window resize events

4. **Service Transitions**
   - Collapses services that have been scrolled past (0vh height)
   - Gradually reduces height of the current transitioning service
   - Applies progressive darkening during transition
   - Maintains full height for services not yet reached

5. **Content Alignment**
   - Ensures service content remains properly aligned during transitions
   - Maintains consistent image and column heights
   - Handles overflow to prevent content issues during height changes

## Animation Flow

The animation progresses through distinct states:

1. **Initial State** (before entering the section)
   - All services have full height (100vh)
   - No overlay effects
   - Default absolute positioning

2. **Section Entry**
   - Container switches to fixed positioning
   - The first service is fully visible
   - Subsequent services are stacked beneath, ready to be revealed

3. **During Scroll**
   - Current service progressively collapses (100vh → 0vh)
   - Darkening overlay intensifies (0% → 70% opacity)
   - Previous services remain collapsed with dark overlay
   - Next service becomes gradually visible underneath

4. **Service Transition**
   - As one service collapses completely, the next becomes the active transition
   - Each transition is calculated based on scroll progress within the section
   - Smooth height reduction creates a "revealing" effect

5. **Section Exit**
   - Container returns to absolute positioning
   - All services except the last are collapsed
   - Last service remains fully visible

## Responsive Behavior

The implementation ensures proper functionality across screen sizes through:

1. **Viewport-Based Measurements**
   - Heights defined in viewport height units (vh)
   - Proportional transitions regardless of screen size

2. **Resize Handling**
   - Recalculates viewport dimensions on window resize
   - Updates positions and heights accordingly
   - Reapplies scroll effects to maintain visual consistency

3. **Mobile Optimization**
   - Maintains core functionality on smaller screens
   - Adjusts content positioning for better mobile viewing

## Implementation Benefits

This approach offers several advantages:

1. **Visual Interest**
   - Creates a dynamic, engaging way to present services
   - Focuses user attention on one service at a time
   - Transitions naturally guide the user through content

2. **Space Efficiency**
   - Presents multiple services without requiring excessive vertical space
   - Makes effective use of the viewport height

3. **User Engagement**
   - Interactive scrolling encourages exploration
   - Visual feedback (darkening, height changes) enhances the experience
   - Creates a sense of depth and dimension

4. **Content Organization**
   - Clear separation between services
   - Progressive disclosure of information
   - Natural hierarchy of content presentation

## Implementation Considerations

For optimal results, the implementation accounts for:

1. **Performance Optimization**
   - Uses passive event listeners for scroll and resize
   - Employs efficient DOM manipulations
   - Implements minimal recalculations during scroll

2. **Content Design**
   - Services structured with consistent layout patterns
   - Content designed to be legible during transitions
   - Visual elements that maintain quality at different heights

3. **Fallback Behavior**
   - Gracefully handles script disabling
   - Maintains basic functionality without animations
   - Ensures content accessibility regardless of JS support 