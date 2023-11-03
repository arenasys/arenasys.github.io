## qDiffusion Web

Built for mobile-only users wanting to leverage [sd-inference-server](https://github.com/arenasys/sd-inference-server/), the backend server for [qDiffusion](https://github.com/arenasys/qDiffusion). 

----
![example](https://github.com/arenasys/arenasys.github.io/raw/master/screenshot.png)

### Colab
Notebooks for running a remote instance are available: [Colab](https://colab.research.google.com/github/arenasys/qDiffusion/blob/master/remote_colab.ipynb), [Kaggle](https://www.kaggle.com/code/arenasys/qdiffusion)
1. Open the [Colab](https://colab.research.google.com/github/arenasys/qDiffusion/blob/master/remote_colab.ipynb) notebook. Requires a Google account.
2. Press the play button in the top left. Colab may take some time to configure a machine for you.
3. Accept or reject the Google Drive permission popup.
	- Accepting will mean models are saved/loaded from `qDiffusion/models` on your drive.
	- Rejecting will mean models are local, you will need to download them again next time.
4. Wait for the requirements to be downloaded and the server to start.
5. Open the web link.
6. Done. See further below for how to get models onto the instance.
	- Remake the instance with `Runtime->Disconnect and delete runtime`, close the tab, then start from Step 1.
	- If issues persist after a remake it could be the cloudflare tunnel is down, check [Here](https://www.cloudflarestatus.com/).

### Hosting
qDiffusion users can host a server to share their hardware with other people or devices.
1. Go to Settings, then Hosting.
2. Configure as needed, Tunnel is required for others to connect.
    - Read-only prevents model uploads. Monitor lets you see all generations.
2. Switch Hosting to Enabled and press Reload, wait for the server to start.
3. Click the Web link to open it in your browser.
4. Done. This URL can be shared and used by anybody.

### Getting Models
No models are downloaded by default. The bottom most row under Endpoint lets you download models.
![download](https://github.com/arenasys/arenasys.github.io/raw/master/download.png)

Paste your URL, select the correct model type and hit download. On Civit.ai make sure you copy the download button's address not the pages address. For example AnythingV3: `https://civitai.com/api/download/models/75?type=Model&format=PickleTensor&size=full&fp=fp16`. More information about supported URLs is available [here](https://github.com/arenasys/qDiffusion/wiki/Guide#downloading).