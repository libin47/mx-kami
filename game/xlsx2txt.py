import os
import pandas as pd

for file in os.listdir('xlsx/'):
    if 'xlsx' not in file:
        continue
    df = pd.read_excel('xlsx/'+file)
    cs = df.columns
    with open('YAML/%s'%file.replace('xlsx', 'yaml'),'w',encoding='utf8') as f:
        for i in range(len(df)):
            line = df.iloc[i]
            f.write(str(line[cs[0]])+': \n')
            for c in cs[1:]:
                if (not pd.isnull(line[c])) and (line[c]!=''):
                    if '[' not in str(line[c]):
                        f.write('  '+c+': '+str(line[c])+'\n')
                    else:
                        s = str(line[c]).replace('[','').replace(']','')
                        ss = s.split(',')
                        f.write('  '+c+': \n')
                        for sss in ss:
                            f.write('    - '+sss+'\n')
