import { AIChatModelCard, AIImageModelCard } from '@/types/aiModel';

// https://help.aliyun.com/zh/model-studio/models?spm=a2c4g.11186623

const qwenChatModels: AIChatModelCard[] = [
  {
    abilities: {
      functionCall: true,
      reasoning: true,
    },
    contextWindowTokens: 131_072,
    description:
      'Qwen3是一款能力大幅提升的新一代通义千问大模型，在推理、通用、Agent和多语言等多个核心能力上均达到业界领先水平，并支持思考模式切换。',
    displayName: 'Qwen3 235B A22B',
    enabled: true,
    id: 'qwen3-235b-a22b',
    maxOutput: 8192,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      input: 2,
      output: 20, // Thinking mode pricing
    },
    releasedAt: '2025-04-28',
    settings: {
      extendParams: ['enableReasoning', 'reasoningBudgetToken'],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
    },
    contextWindowTokens: 131_072,
    description:
      'Qwen3是一款能力大幅提升的新一代通义千问大模型，在推理、通用、Agent和多语言等多个核心能力上均达到业界领先水平，并支持思考模式切换。',
    displayName: 'Qwen3 32B',
    id: 'qwen3-32b',
    maxOutput: 8192,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      input: 2,
      output: 20, // Thinking mode pricing
    },
    releasedAt: '2025-04-28',
    settings: {
      extendParams: ['enableReasoning', 'reasoningBudgetToken'],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
    },
    contextWindowTokens: 131_072,
    description:
      'Qwen3是一款能力大幅提升的新一代通义千问大模型，在推理、通用、Agent和多语言等多个核心能力上均达到业界领先水平，并支持思考模式切换。',
    displayName: 'Qwen3 30B A3B',
    enabled: true,
    id: 'qwen3-30b-a3b',
    maxOutput: 8192,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      input: 0.75,
      output: 7.5, // Thinking mode pricing
    },
    releasedAt: '2025-04-28',
    settings: {
      extendParams: ['enableReasoning', 'reasoningBudgetToken'],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
    },
    contextWindowTokens: 131_072,
    description:
      'Qwen3是一款能力大幅提升的新一代通义千问大模型，在推理、通用、Agent和多语言等多个核心能力上均达到业界领先水平，并支持思考模式切换。',
    displayName: 'Qwen3 14B',
    id: 'qwen3-14b',
    maxOutput: 8192,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      input: 1,
      output: 10, // Thinking mode pricing
    },
    releasedAt: '2025-04-28',
    settings: {
      extendParams: ['enableReasoning', 'reasoningBudgetToken'],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
    },
    contextWindowTokens: 131_072,
    description:
      'Qwen3是一款能力大幅提升的新一代通义千问大模型，在推理、通用、Agent和多语言等多个核心能力上均达到业界领先水平，并支持思考模式切换。',
    displayName: 'Qwen3 8B',
    id: 'qwen3-8b',
    maxOutput: 8192,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      input: 0.5,
      output: 5, // Thinking mode pricing
    },
    releasedAt: '2025-04-28',
    settings: {
      extendParams: ['enableReasoning', 'reasoningBudgetToken'],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
    },
    contextWindowTokens: 131_072,
    description:
      'Qwen3是一款能力大幅提升的新一代通义千问大模型，在推理、通用、Agent和多语言等多个核心能力上均达到业界领先水平，并支持思考模式切换。',
    displayName: 'Qwen3 4B',
    id: 'qwen3-4b',
    maxOutput: 8192,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      input: 0.3,
      output: 3, // Thinking mode pricing
    },
    releasedAt: '2025-04-28',
    settings: {
      extendParams: ['enableReasoning', 'reasoningBudgetToken'],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
    },
    contextWindowTokens: 32_768,
    description:
      'Qwen3是一款能力大幅提升的新一代通义千问大模型，在推理、通用、Agent和多语言等多个核心能力上均达到业界领先水平，并支持思考模式切换。',
    displayName: 'Qwen3 1.7B',
    id: 'qwen3-1.7b',
    maxOutput: 8192,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      input: 0.3,
      output: 3, // Thinking mode pricing
    },
    releasedAt: '2025-04-28',
    settings: {
      extendParams: ['enableReasoning', 'reasoningBudgetToken'],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
    },
    contextWindowTokens: 32_768,
    description:
      'Qwen3是一款能力大幅提升的新一代通义千问大模型，在推理、通用、Agent和多语言等多个核心能力上均达到业界领先水平，并支持思考模式切换。',
    displayName: 'Qwen3 0.6B',
    id: 'qwen3-0.6b',
    maxOutput: 8192,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      input: 0.3,
      output: 3, // Thinking mode pricing
    },
    releasedAt: '2025-04-28',
    settings: {
      extendParams: ['enableReasoning', 'reasoningBudgetToken'],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      search: true,
    },
    config: {
      deploymentName: 'qwq-plus-latest', // expired on 2025-09-02
    },
    contextWindowTokens: 131_072,
    description:
      '基于 Qwen2.5 模型训练的 QwQ 推理模型，通过强化学习大幅度提升了模型推理能力。模型数学代码等核心指标（AIME 24/25、LiveCodeBench）以及部分通用指标（IFEval、LiveBench等）达到DeepSeek-R1 满血版水平。',
    displayName: 'QwQ Plus',
    id: 'qwq-plus',
    maxOutput: 8192,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      input: 1.6,
      output: 4,
    },
    releasedAt: '2025-03-06',
    settings: {
      searchImpl: 'params',
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      search: true,
    },
    config: {
      deploymentName: 'qwen-turbo-2025-04-28', // expired on 2025-10-26
    },
    contextWindowTokens: 1_000_000,
    description: '通义千问超大规模语言模型，支持中文、英文等不同语言输入。',
    displayName: 'Qwen Turbo',
    enabled: true,
    id: 'qwen-turbo',
    maxOutput: 8192,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      input: 0.3,
      output: 3, // Thinking mode pricing
    },
    releasedAt: '2025-04-28',
    settings: {
      extendParams: ['enableReasoning', 'reasoningBudgetToken'],
      searchImpl: 'params',
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      search: true,
    },
    config: {
      deploymentName: 'qwen-plus-2025-04-28', // expired on 2025-10-26
    },
    contextWindowTokens: 131_072,
    description: '通义千问超大规模语言模型增强版，支持中文、英文等不同语言输入。',
    displayName: 'Qwen Plus',
    enabled: true,
    id: 'qwen-plus',
    maxOutput: 8192,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      input: 0.8,
      output: 8, // Thinking mode pricing
    },
    releasedAt: '2025-04-28',
    settings: {
      extendParams: ['enableReasoning', 'reasoningBudgetToken'],
      searchImpl: 'params',
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      search: true,
    },
    config: {
      deploymentName: 'qwen-max-2025-01-25',
    },
    contextWindowTokens: 131_072,
    description:
      '通义千问千亿级别超大规模语言模型，支持中文、英文等不同语言输入，当前通义千问2.5产品版本背后的API模型。',
    displayName: 'Qwen Max',
    enabled: true,
    id: 'qwen-max',
    maxOutput: 8192,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      input: 2.4,
      output: 9.6,
    },
    settings: {
      searchImpl: 'params',
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    config: {
      deploymentName: 'qwen-long-latest',
    },
    contextWindowTokens: 10_000_000,
    description:
      '通义千问超大规模语言模型，支持长文本上下文，以及基于长文档、多文档等多个场景的对话功能。',
    displayName: 'Qwen Long',
    id: 'qwen-long',
    maxOutput: 8192,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      input: 0.5,
      output: 2,
    },
    type: 'chat',
  },
  {
    abilities: {
      vision: true,
    },
    config: {
      deploymentName: 'qwen-omni-turbo-latest', // expired on 2025-08-13
    },
    contextWindowTokens: 32_768,
    description:
      'Qwen-Omni 系列模型支持输入多种模态的数据，包括视频、音频、图片、文本，并输出音频与文本。',
    displayName: 'Qwen Omni Turbo',
    enabled: true,
    id: 'qwen-omni-turbo',
    maxOutput: 2048,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      input: 1.5, // use image input price
      output: 4.5,
    },
    type: 'chat',
  },
  {
    abilities: {
      vision: true,
    },
    contextWindowTokens: 32_768,
    description:
      'Qwen-Omni 系列模型支持输入多种模态的数据，包括视频、音频、图片、文本，并输出音频与文本。',
    displayName: 'Qwen2.5 Omni 7B',
    id: 'qwen2.5-omni-7b',
    maxOutput: 2048,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      input: 2, // use image input price
      output: 6,
    },
    type: 'chat',
  },
  {
    abilities: {
      vision: true,
    },
    config: {
      deploymentName: 'qwen-vl-plus-2025-01-25',
    },
    contextWindowTokens: 131_072,
    description:
      '通义千问大规模视觉语言模型增强版。大幅提升细节识别能力和文字识别能力，支持超百万像素分辨率和任意长宽比规格的图像。',
    displayName: 'Qwen VL Plus',
    id: 'qwen-vl-plus',
    maxOutput: 8192,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      input: 1.5,
      output: 4.5,
    },
    type: 'chat',
  },
  {
    abilities: {
      vision: true,
    },
    config: {
      deploymentName: 'qwen-vl-max-2025-04-08',
    },
    contextWindowTokens: 131_072,
    description:
      '通义千问超大规模视觉语言模型。相比增强版，再次提升视觉推理能力和指令遵循能力，提供更高的视觉感知和认知水平。',
    displayName: 'Qwen VL Max',
    enabled: true,
    id: 'qwen-vl-max',
    maxOutput: 8192,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      input: 3,
      output: 9,
    },
    type: 'chat',
  },
  {
    abilities: {
      vision: true,
    },
    config: {
      deploymentName: 'qwen-vl-ocr-2025-04-13',
    },
    contextWindowTokens: 34_096,
    description:
      '通义千问OCR是文字提取专有模型，专注于文档、表格、试题、手写体文字等类型图像的文字提取能力。它能够识别多种文字，目前支持的语言有：汉语、英语、法语、日语、韩语、德语、俄语、意大利语、越南语、阿拉伯语。',
    displayName: 'Qwen VL OCR',
    id: 'qwen-vl-ocr',
    maxOutput: 4096,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      input: 5,
      output: 5,
    },
    type: 'chat',
  },
  {
    config: {
      deploymentName: 'qwen-math-turbo-latest',
    },
    contextWindowTokens: 4096,
    description: '通义千问数学模型是专门用于数学解题的语言模型。',
    displayName: 'Qwen Math Turbo',
    id: 'qwen-math-turbo',
    maxOutput: 3072,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      input: 2,
      output: 6,
    },
    type: 'chat',
  },
  {
    config: {
      deploymentName: 'qwen-math-plus-latest',
    },
    contextWindowTokens: 4096,
    description: '通义千问数学模型是专门用于数学解题的语言模型。',
    displayName: 'Qwen Math Plus',
    id: 'qwen-math-plus',
    maxOutput: 3072,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      input: 4,
      output: 12,
    },
    type: 'chat',
  },
  {
    config: {
      deploymentName: 'qwen-coder-turbo-latest',
    },
    contextWindowTokens: 131_072,
    description: '通义千问代码模型。',
    displayName: 'Qwen Coder Turbo',
    id: 'qwen-coder-turbo',
    maxOutput: 8192,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      input: 2,
      output: 6,
    },
    type: 'chat',
  },
  {
    config: {
      deploymentName: 'qwen-coder-plus-latest',
    },
    contextWindowTokens: 131_072,
    description: '通义千问代码模型。',
    displayName: 'Qwen Coder Plus',
    id: 'qwen-coder-plus',
    maxOutput: 8192,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      input: 3.5,
      output: 7,
    },
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
      search: true,
    },
    contextWindowTokens: 131_072,
    description:
      '基于 Qwen2.5-32B 模型训练的 QwQ 推理模型，通过强化学习大幅度提升了模型推理能力。模型数学代码等核心指标（AIME 24/25、LiveCodeBench）以及部分通用指标（IFEval、LiveBench等）达到DeepSeek-R1 满血版水平，各指标均显著超过同样基于 Qwen2.5-32B 的 DeepSeek-R1-Distill-Qwen-32B。',
    displayName: 'QwQ 32B',
    id: 'qwq-32b',
    maxOutput: 8192,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      input: 2,
      output: 6,
    },
    releasedAt: '2025-03-06',
    settings: {
      searchImpl: 'params',
    },
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
    },
    contextWindowTokens: 32_768,
    description: 'QwQ模型是由 Qwen 团队开发的实验性研究模型，专注于增强 AI 推理能力。',
    displayName: 'QwQ 32B Preview',
    id: 'qwq-32b-preview',
    maxOutput: 16_384,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      input: 2,
      output: 6,
    },
    releasedAt: '2024-11-28',
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
      vision: true,
    },
    config: {
      deploymentName: 'qvq-max-latest',
    },
    contextWindowTokens: 131_072,
    description:
      '通义千问QVQ视觉推理模型，支持视觉输入及思维链输出，在数学、编程、视觉分析、创作以及通用任务上都表现了更强的能力。',
    displayName: 'QVQ Max',
    id: 'qvq-max',
    maxOutput: 8192,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      input: 8,
      output: 32,
    },
    releasedAt: '2025-05-15',
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
      vision: true,
    },
    config: {
      deploymentName: 'qvq-plus-latest',
    },
    contextWindowTokens: 131_072,
    description:
      '视觉推理模型。支持视觉输入及思维链输出，继qvq-max模型后推出的plus版本，相较于qvq-max模型，qvq-plus系列模型推理速度更快，效果和成本更均衡。',
    displayName: 'QVQ Plus',
    id: 'qvq-plus',
    maxOutput: 8192,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      input: 2,
      output: 5,
    },
    releasedAt: '2025-05-15',
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
      vision: true,
    },
    contextWindowTokens: 32_768,
    description:
      'QVQ模型是由 Qwen 团队开发的实验性研究模型，专注于提升视觉推理能力，尤其在数学推理领域。',
    displayName: 'QVQ 72B Preview',
    id: 'qvq-72b-preview',
    maxOutput: 16_384,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      input: 12,
      output: 36,
    },
    releasedAt: '2024-12-25',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 131_072,
    description: '通义千问2.5对外开源的7B规模的模型。',
    displayName: 'Qwen2.5 7B',
    id: 'qwen2.5-7b-instruct',
    maxOutput: 8192,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      input: 0.5,
      output: 1,
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 131_072,
    description: '通义千问2.5对外开源的14B规模的模型。',
    displayName: 'Qwen2.5 14B',
    id: 'qwen2.5-14b-instruct',
    maxOutput: 8192,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      input: 1,
      output: 3,
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 131_072,
    description: '通义千问2.5对外开源的32B规模的模型。',
    displayName: 'Qwen2.5 32B',
    id: 'qwen2.5-32b-instruct',
    maxOutput: 8192,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      input: 2,
      output: 6,
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 131_072,
    description: '通义千问2.5对外开源的72B规模的模型。',
    displayName: 'Qwen2.5 72B',
    id: 'qwen2.5-72b-instruct',
    maxOutput: 8192,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      input: 4,
      output: 12,
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 1_000_000,
    description: '通义千问2.5对外开源的72B规模的模型。',
    displayName: 'Qwen2.5 14B 1M',
    id: 'qwen2.5-14b-instruct-1m',
    maxOutput: 8192,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      input: 1,
      output: 3,
    },
    releasedAt: '2025-01-27',
    type: 'chat',
  },
  {
    contextWindowTokens: 4096,
    description: 'Qwen-Math 模型具有强大的数学解题能力。',
    displayName: 'Qwen2.5 Math 7B',
    id: 'qwen2.5-math-7b-instruct',
    maxOutput: 3072,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      input: 1,
      output: 2,
    },
    type: 'chat',
  },
  {
    contextWindowTokens: 4096,
    description: 'Qwen-Math 模型具有强大的数学解题能力。',
    displayName: 'Qwen2.5 Math 72B',
    id: 'qwen2.5-math-72b-instruct',
    maxOutput: 3072,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      input: 4,
      output: 12,
    },
    type: 'chat',
  },
  {
    contextWindowTokens: 131_072,
    description: '通义千问代码模型开源版。',
    displayName: 'Qwen2.5 Coder 7B',
    id: 'qwen2.5-coder-7b-instruct',
    maxOutput: 8192,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      input: 1,
      output: 2,
    },
    type: 'chat',
  },
  {
    contextWindowTokens: 131_072,
    description: '通义千问代码模型开源版。',
    displayName: 'Qwen2.5 Coder 14B',
    id: 'qwen2.5-coder-14b-instruct',
    maxOutput: 8192,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      input: 2,
      output: 6,
    },
    type: 'chat',
  },
  {
    contextWindowTokens: 131_072,
    description: '通义千问代码模型开源版。',
    displayName: 'Qwen2.5 Coder 32B',
    id: 'qwen2.5-coder-32b-instruct',
    maxOutput: 8192,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      input: 2,
      output: 6,
    },
    type: 'chat',
  },
  {
    abilities: {
      vision: true,
    },
    contextWindowTokens: 131_072,
    description:
      '指令跟随、数学、解题、代码整体提升，万物识别能力提升，支持多样格式直接精准定位视觉元素，支持对长视频文件（最长10分钟）进行理解和秒级别的事件时刻定位，能理解时间先后和快慢，基于解析和定位能力支持操控OS或Mobile的Agent，关键信息抽取能力和Json格式输出能力强，此版本为72B版本，本系列能力最强的版本。',
    displayName: 'Qwen2.5 VL 72B',
    id: 'qwen2.5-vl-72b-instruct',
    maxOutput: 8192,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      input: 16,
      output: 48,
    },
    releasedAt: '2025-01-27',
    type: 'chat',
  },
  {
    abilities: {
      vision: true,
    },
    contextWindowTokens: 131_072,
    description:
      'Qwen2.5VL系列模型，在math和学科问题解答达到了接近Qwen2.5VL-72B的水平，回复风格面向人类偏好进行大幅调整，尤其是数学、逻辑推理、知识问答等客观类query，模型回复详实程度和格式清晰度明显改善。此版本为32B版本。',
    displayName: 'Qwen2.5 VL 32B',
    id: 'qwen2.5-vl-32b-instruct',
    maxOutput: 8192,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      input: 8,
      output: 24,
    },
    releasedAt: '2025-03-24',
    type: 'chat',
  },
  {
    abilities: {
      vision: true,
    },
    contextWindowTokens: 131_072,
    description:
      '指令跟随、数学、解题、代码整体提升，万物识别能力提升，支持多样格式直接精准定位视觉元素，支持对长视频文件（最长10分钟）进行理解和秒级别的事件时刻定位，能理解时间先后和快慢，基于解析和定位能力支持操控OS或Mobile的Agent，关键信息抽取能力和Json格式输出能力强，此版本为72B版本，本系列能力最强的版本。',
    displayName: 'Qwen2.5 VL 7B',
    id: 'qwen2.5-vl-7b-instruct',
    maxOutput: 8192,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      input: 2,
      output: 5,
    },
    releasedAt: '2025-01-27',
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
    },
    contextWindowTokens: 131_072,
    description:
      '685B 满血版模型，2025年5月28日发布。DeepSeek-R1 在后训练阶段大规模使用了强化学习技术，在仅有极少标注数据的情况下，极大提升了模型推理能力。在数学、代码、自然语言推理等任务上，性能较高，能力较强。',
    displayName: 'DeepSeek R1 0528',
    id: 'deepseek-r1-0528',
    maxOutput: 16_384,
    organization: 'DeepSeek',
    pricing: {
      currency: 'CNY',
      input: 4,
      output: 16,
    },
    releasedAt: '2025-05-28',
    type: 'chat',
  },
  {
    contextWindowTokens: 65_536,
    description:
      'DeepSeek-V3 为自研 MoE 模型，671B 参数，激活 37B，在 14.8T token 上进行了预训练，在长文本、代码、数学、百科、中文能力上表现优秀。',
    displayName: 'DeepSeek V3',
    id: 'deepseek-v3',
    maxOutput: 8192,
    organization: 'DeepSeek',
    pricing: {
      currency: 'CNY',
      input: 2,
      output: 8,
    },
    releasedAt: '2025-01-27',
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
    },
    contextWindowTokens: 32_768,
    description:
      'DeepSeek-R1-Distill-Qwen-1.5B 是一个基于 Qwen2.5-Math-1.5B 的蒸馏大型语言模型，使用了 DeepSeek R1 的输出。',
    displayName: 'DeepSeek R1 Distill Qwen 1.5B',
    id: 'deepseek-r1-distill-qwen-1.5b',
    maxOutput: 16_384,
    organization: 'DeepSeek',
    pricing: {
      currency: 'CNY',
      input: 0,
      output: 0,
    },
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
    },
    contextWindowTokens: 32_768,
    description:
      'DeepSeek-R1-Distill-Qwen-7B 是一个基于 Qwen2.5-Math-7B 的蒸馏大型语言模型，使用了 DeepSeek R1 的输出。',
    displayName: 'DeepSeek R1 Distill Qwen 7B',
    id: 'deepseek-r1-distill-qwen-7b',
    maxOutput: 16_384,
    organization: 'DeepSeek',
    pricing: {
      currency: 'CNY',
      input: 0.5,
      output: 1,
    },
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
    },
    contextWindowTokens: 32_768,
    description:
      'DeepSeek-R1-Distill-Qwen-14B 是一个基于 Qwen2.5-14B 的蒸馏大型语言模型，使用了 DeepSeek R1 的输出。',
    displayName: 'DeepSeek R1 Distill Qwen 14B',
    id: 'deepseek-r1-distill-qwen-14b',
    maxOutput: 16_384,
    organization: 'DeepSeek',
    pricing: {
      currency: 'CNY',
      input: 1,
      output: 3,
    },
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
    },
    contextWindowTokens: 32_768,
    description:
      'DeepSeek-R1-Distill-Qwen-32B 是一个基于 Qwen2.5-32B 的蒸馏大型语言模型，使用了 DeepSeek R1 的输出。',
    displayName: 'DeepSeek R1 Distill Qwen 32B',
    id: 'deepseek-r1-distill-qwen-32b',
    maxOutput: 16_384,
    organization: 'DeepSeek',
    pricing: {
      currency: 'CNY',
      input: 2,
      output: 6,
    },
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
    },
    contextWindowTokens: 32_768,
    description:
      'DeepSeek-R1-Distill-Llama-8B 是一个基于 Llama-3.1-8B 的蒸馏大型语言模型，使用了 DeepSeek R1 的输出。',
    displayName: 'DeepSeek R1 Distill Llama 8B',
    id: 'deepseek-r1-distill-llama-8b',
    maxOutput: 16_384,
    organization: 'DeepSeek',
    pricing: {
      currency: 'CNY',
      input: 0,
      output: 0,
    },
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
    },
    contextWindowTokens: 32_768,
    description:
      'DeepSeek-R1-Distill-Llama-70B 是一个基于 Llama-3.3-70B-Instruct 的蒸馏大型语言模型，使用了 DeepSeek R1 的输出。',
    displayName: 'DeepSeek R1 Distill Llama 70B',
    id: 'deepseek-r1-distill-llama-70b',
    maxOutput: 16_384,
    organization: 'DeepSeek',
    pricing: {
      currency: 'CNY',
      input: 0,
      output: 0,
    },
    type: 'chat',
  },
];

const qwenImageModels: AIImageModelCard[] = [
  {
    description: '万相2.2极速版，当前最新模型。在创意性、稳定性、写实质感上全面升级，生成速度快，性价比高。',
    displayName: 'Wanxiang2.2 T2I Flash',
    enabled: true,
    id: 'wan2.2-t2i-flash',
    organization: 'Qwen',
    parameters: {
      height: { default: 1024, max: 1440, min: 512, step: 1 },
      prompt: {
        default: '',
      },
      seed: { default: null },
      width: { default: 1024, max: 1440, min: 512, step: 1 },
    },
    releasedAt: '2025-07-28',
    type: 'image',
  },
  {
    description: '万相2.2专业版，当前最新模型。在创意性、稳定性、写实质感上全面升级，生成细节丰富。',
    displayName: 'Wanxiang2.2 T2I Plus',
    enabled: true,
    id: 'wan2.2-t2i-plus',
    organization: 'Qwen',
    parameters: {
      height: { default: 1024, max: 1440, min: 512, step: 1 },
      prompt: {
        default: '',
      },
      seed: { default: null },
      width: { default: 1024, max: 1440, min: 512, step: 1 },
    },
    releasedAt: '2025-07-28',
    type: 'image',
  },
  {
    description: '全面升级版本。生成速度快、效果全面、综合性价比高。对应通义万相官网2.1极速模型。',
    displayName: 'Wanxiang2.1 T2I Turbo',
    id: 'wanx2.1-t2i-turbo',
    organization: 'Qwen',
    parameters: {
      height: { default: 1024, max: 1440, min: 512, step: 1 },
      prompt: {
        default: '',
      },
      seed: { default: null },
      width: { default: 1024, max: 1440, min: 512, step: 1 },
    },
    releasedAt: '2025-01-08',
    type: 'image',
  },
  {
    description: '全面升级版本。生成图像细节更丰富，速度稍慢。对应通义万相官网2.1专业模型。',
    displayName: 'Wanxiang2.1 T2I Plus',
    id: 'wanx2.1-t2i-plus',
    organization: 'Qwen',
    parameters: {
      height: { default: 1024, max: 1440, min: 512, step: 1 },
      prompt: {
        default: '',
      },
      seed: { default: null },
      width: { default: 1024, max: 1440, min: 512, step: 1 },
    },
    releasedAt: '2025-01-08',
    type: 'image',
  },
  {
    description: '擅长质感人像，速度中等、成本较低。对应通义万相官网2.0极速模型。',
    displayName: 'Wanxiang2.0 T2I Turbo',
    id: 'wanx2.0-t2i-turbo',
    organization: 'Qwen',
    parameters: {
      height: { default: 1024, max: 1440, min: 512, step: 1 },
      prompt: {
        default: '',
      },
      seed: { default: null },
      width: { default: 1024, max: 1440, min: 512, step: 1 },
    },
    releasedAt: '2025-01-17',
    type: 'image',
  },
  {
    description: '基础文生图模型。对应通义万相官网1.0通用模型。',
    displayName: 'Wanxiang v1',
    id: 'wanx-v1',
    organization: 'Qwen',
    parameters: {
      height: { default: 1024, max: 1440, min: 512, step: 1 },
      prompt: {
        default: '',
      },
      seed: { default: null },
      width: { default: 1024, max: 1440, min: 512, step: 1 },
    },
    releasedAt: '2024-05-22',
    type: 'image',
  },
  {
    description: 'FLUX.1 [schnell] 作为目前开源最先进的少步模型，不仅超越了同类竞争者，甚至还优于诸如 Midjourney v6.0 和 DALL·E 3 (HD) 等强大的非精馏模型。该模型经过专门微调，以保留预训练阶段的全部输出多样性，相较于当前市场上的最先进模型，FLUX.1 [schnell] 显著提升了在视觉质量、指令遵从、尺寸/比例变化、字体处理及输出多样性等方面的可能，为用户带来更为丰富多样的创意图像生成体验。',
    displayName: 'FLUX.1 [schnell]',
    enabled: true,
    id: 'flux-schnell',
    organization: 'Qwen',
    parameters: {
      prompt: {
        default: '',
      },
      seed: { default: null },
      size: {
        default: '1024x1024',
        enum: ['512x1024', '768x512', '768x1024', '1024x576', '576x1024', '1024x1024'],
      },
      steps: { default: 4, max: 12, min: 1 },
    },
    releasedAt: '2024-08-07',
    type: 'image',
  },
  {
    description: 'FLUX.1 [dev] 是一款面向非商业应用的开源权重、精炼模型。FLUX.1 [dev] 在保持了与FLUX专业版相近的图像质量和指令遵循能力的同时，具备更高的运行效率。相较于同尺寸的标准模型，它在资源利用上更为高效。',
    displayName: 'FLUX.1 [dev]',
    enabled: true,
    id: 'flux-dev',
    organization: 'Qwen',
    parameters: {
      prompt: {
        default: '',
      },
      seed: { default: null },
      size: {
        default: '1024x1024',
        enum: ['512x1024', '768x512', '768x1024', '1024x576', '576x1024', '1024x1024'],
      },
      steps: { default: 50, max: 50, min: 1 },
    },
    releasedAt: '2024-08-07',
    type: 'image',
  },
  {
    description: 'FLUX.1-merged 模型结合了 "DEV" 在开发阶段探索的深度特性和 "Schnell" 所代表的高速执行优势。通过这一举措，FLUX.1-merged 不仅提升了模型的性能界限，还拓宽了其应用范围。',
    displayName: 'FLUX.1-merged',
    enabled: true,
    id: 'flux-merged',
    organization: 'Qwen',
    parameters: {
      prompt: {
        default: '',
      },
      seed: { default: null },
      size: {
        default: '1024x1024',
        enum: ['512x1024', '768x512', '768x1024', '1024x576', '576x1024', '1024x1024'],
      },
      steps: { default: 30, max: 30, min: 1 },
    },
    releasedAt: '2024-08-22',
    type: 'image',
  },
  {
    description: 'stable-diffusion-3.5-large 是一个具有8亿参数的多模态扩散变压器（MMDiT）文本到图像生成模型，具备卓越的图像质量和提示词匹配度，支持生成 100 万像素的高分辨率图像，且能够在普通消费级硬件上高效运行。',
    displayName: 'StableDiffusion 3.5 Large',
    id: 'stable-diffusion-3.5-large',
    organization: 'Qwen',
    parameters: {
      height: { default: 1024, max: 1024, min: 512, step: 128 },
      prompt: {
        default: '',
      },
      steps: { default: 40, max: 500, min: 1 },
      width: { default: 1024, max: 1024, min: 512, step: 128 },
    },
    releasedAt: '2024-10-25',
    type: 'image',
  },
  {
    description: 'stable-diffusion-3.5-large-turbo 是在 stable-diffusion-3.5-large 的基础上采用对抗性扩散蒸馏（ADD）技术的模型，具备更快的速度。',
    displayName: 'StableDiffusion 3.5 Large Turbo',
    id: 'stable-diffusion-3.5-large-turbo',
    organization: 'Qwen',
    parameters: {
      height: { default: 1024, max: 1024, min: 512, step: 128 },
      prompt: {
        default: '',
      },
      steps: { default: 40, max: 500, min: 1 },
      width: { default: 1024, max: 1024, min: 512, step: 128 },
    },
    releasedAt: '2024-10-25',
    type: 'image',
  },
  {
    description: 'stable-diffusion-xl 相比于 v1.5 做了重大的改进，并且与当前开源的文生图 SOTA 模型 midjourney 效果相当。具体改进之处包括： 更大的 unet backbone，是之前的 3 倍； 增加了 refinement 模块用于改善生成图片的质量；更高效的训练技巧等。',
    displayName: 'StableDiffusion xl',
    id: 'stable-diffusion-xl',
    organization: 'Qwen',
    parameters: {
      height: { default: 1024, max: 1024, min: 512, step: 128 },
      prompt: {
        default: '',
      },
      steps: { default: 50, max: 500, min: 1 },
      width: { default: 1024, max: 1024, min: 512, step: 128 },
    },
    releasedAt: '2024-04-09',
    type: 'image',
  },
  {
    description: 'stable-diffusion-v1.5 是以 stable-diffusion-v1.2 检查点的权重进行初始化，并在 "laion-aesthetics v2 5+" 上以 512x512 的分辨率进行了595k步的微调，减少了 10% 的文本条件化，以提高无分类器的引导采样。',
    displayName: 'StableDiffusion v1.5',
    id: 'stable-diffusion-v1.5',
    organization: 'Qwen',
    parameters: {
      height: { default: 512, max: 1024, min: 512, step: 128 },
      prompt: {
        default: '',
      },
      steps: { default: 50, max: 500, min: 1 },
      width: { default: 512, max: 1024, min: 512, step: 128 },
    },
    releasedAt: '2024-04-09',
    type: 'image',
  },
];

export const allModels = [...qwenChatModels, ...qwenImageModels];

export default allModels;
