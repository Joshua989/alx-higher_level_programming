#!/usr/bin/python3
def new_in_list(my_list, idx, element):
    if not my_list:
        return
    list_copy = my_list.copy()
    if 0 <= idx < len(list_copy):
        list_copy[idx] = element
    return list_copy

