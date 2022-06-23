


Maybe Packages:
'react-native-modal-overlay' --> if default overlay sucks, keep it. 

Both the checkbox and the terms need to know about contract ID
Contract ID would come from the group though... 
And the group doesn't load until the first render
So you can't load up the contract group and contract ID at the same time 

Screen renders > API call to get the group > grab IDs from group > 
    Pass to checkbox and overlay? 
    Think checkbox would work cause nothing's getting sent immediately
        or at the very least, don't need to fetch anything to display
    Overlay needs to fetch though.
        So ... it should be a component that renders on its own when it's opened

<View>
    <Checkbox />
    ...
</V>

main
    screen
        checkbox? 
        terms... 