import numpy as np
import pandas as pd
from sklearn.linear_model import Perceptron
from sklearn.datasets import load_iris
iris = load_iris()
X = iris.data
y = iris.target
data = np.hstack((X, y[:, np.newaxis]))
labels = iris.target_names
features = iris.feature_names
df = pd.DataFrame(data, columns-iris.feature_names+['label'])
df.label = df.label.map({k:v for k,v in enumerate(labels)})
df.tail()
import numpy as np
import matplotlib.pyplot as plt
# select setosa and versicolor
y = df.iloc[0:100, 4].values
y = np.where(y == 'setosa', -1, 1)
# extract sepal length and petal length X = df.iloc[0:100, [0, 2]].values
# plot data
plt.scatter (x[:50, 0], X[:50, 1],
              color='red', marker='o', label='setosa')
plt.scatter (X[50:100, 0], X[50:100, 1],
              color='blue', marker='x', label='versicolor')
plt.xlabel('petal length [cm]')
plt.ylabel('sepal length [cm]')
plt.legend(loc='upper left')
plt.show()