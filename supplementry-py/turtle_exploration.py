from turtle import Turtle, mainloop

t = Turtle()
t.speed(3)
# Draw the grid. 
t.pencolor('black')
t.forward(500)
t.left(180)
t.forward(1000)
t.setposition(0,0)
t.left(90)
t.forward(500)
t.right(180)
t.forward(1000)
t.setposition(0,0)

# Draw the shuriken
t.color('green')
t.setposition(0,75)
t.left(135)
t.setposition(200,0)
t.setposition(0,-75)
t.right(90)
t.setposition(-200,0)
t.right(90)
t.setposition(0,75)
t.setposition(0,0)
t.left(45)
t.left(90)

# Draw the second half.
t.color('red')
t.setposition(-75,0)
t.right(135)
t.setposition(0,200)
t.right(90)
t.setposition(75,0)
t.left(90)
t.goto(0,-200)
t.left(90)
t.goto(-75,0)
t.right(135)

# Draw the circle
t.color('pink')
t.penup()
t.goto(0,-14)
t.pendown()
t.circle(14.0)






mainloop()