<<<<<<< HEAD
"""
Description
You organize a sports league in a round-robin-system. Each team meets all other teams. In your league a win gives a team 2 points, a draw gives both teams 1 point. After some games you have to compute the order of the teams in your league. You use the following criteria to arrange the teams:

Points
Scoring differential (the difference between goals scored and those conceded)
Goals scored
First you sort the teams by their points. If two or more teams reached the same number of points, the second criteria comes into play and so on. Finally, if all criteria are the same, the teams share a place.

Input
number: Number of teams in your league.
games: An array of arrays. Each item represents a played game with an array of four elements [TeamA,TeamB,GoalA,GoalB] (TeamA played against TeamB and scored GoalA goals and conceded GoalB goals ).
Output
positions: An array of positions. The i-th item should be the position of the i-th team in your league.
"""
def compute_ranks(number, games):
    points = [0]*number
    diff = [0]*number
    goals = [0]*number
    for game in games:
        diff[game[0]] = diff[game[0]] + (game[2]-game[3])
        diff[game[1]] = diff[game[1]] + (game[3]-game[2])
        goals[game[0]] = goals[game[0]] + game[2] 
        goals[game[1]] = goals[game[1]] + game[3] 
        if game[2]>game[3]:
            points[game[0]] = points[game[0]] + 2
        elif game[2]==game[3]:
            points[game[0]] = points[game[0]] + 1
            points[game[1]] = points[game[1]] + 1
        else:
            points[game[1]] = points[game[1]] + 2

    print(points)
    print(diff)
    print(goals)
    total = [sum(x) for x in zip(points, diff, goals)]
    print(total)
    
    a={}
    rank=1
    skip=0
    for num in sorted(total, reverse = True):
        if num not in a:
          a[num]=rank+skip
          rank=rank+1
        else:
          skip=skip+1
    return[a[i] for i in total]

=======
"""
Description
You organize a sports league in a round-robin-system. Each team meets all other teams. In your league a win gives a team 2 points, a draw gives both teams 1 point. After some games you have to compute the order of the teams in your league. You use the following criteria to arrange the teams:

Points
Scoring differential (the difference between goals scored and those conceded)
Goals scored
First you sort the teams by their points. If two or more teams reached the same number of points, the second criteria comes into play and so on. Finally, if all criteria are the same, the teams share a place.

Input
number: Number of teams in your league.
games: An array of arrays. Each item represents a played game with an array of four elements [TeamA,TeamB,GoalA,GoalB] (TeamA played against TeamB and scored GoalA goals and conceded GoalB goals ).
Output
positions: An array of positions. The i-th item should be the position of the i-th team in your league.
"""
def compute_ranks(number, games):
    points = [0]*number
    diff = [0]*number
    goals = [0]*number
    for game in games:
        diff[game[0]] = diff[game[0]] + (game[2]-game[3])
        diff[game[1]] = diff[game[1]] + (game[3]-game[2])
        goals[game[0]] = goals[game[0]] + game[2] 
        goals[game[1]] = goals[game[1]] + game[3] 
        if game[2]>game[3]:
            points[game[0]] = points[game[0]] + 2
        elif game[2]==game[3]:
            points[game[0]] = points[game[0]] + 1
            points[game[1]] = points[game[1]] + 1
        else:
            points[game[1]] = points[game[1]] + 2

    print(points)
    print(diff)
    print(goals)
    total = [sum(x) for x in zip(points, diff, goals)]
    print(total)
    
    a={}
    rank=1
    skip=0
    for num in sorted(total, reverse = True):
        if num not in a:
          a[num]=rank+skip
          rank=rank+1
        else:
          skip=skip+1
    return[a[i] for i in total]

>>>>>>> 3b5e07080aa95d3a705c74e556addfb5e0070782
