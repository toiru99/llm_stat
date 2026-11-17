---
type: Model
title: GPT-6 Astra (max)
creator: OpenAI
license: Proprietary
intelligence_index: 56.8538559596797
price_blended_usd_1m: 7.7
output_speed_tps: 42.366580963266536
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 88.4, z: 2.0, r: 80.0, estimated: false }  # 전문 지식
  reasoning: { s: 87.3, z: 2.57, r: 88.6, estimated: false }  # 추론
  coding: { s: 81.5, z: 1.42, r: 71.3, estimated: false }  # 코딩
  agentic: { s: 84.2, z: 1.37, r: 70.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 96.8, z: 1.31, r: 69.6, estimated: false }  # 멀티모달
  long_context: { s: 91.0, z: 1.12, r: 66.8, estimated: false }  # 긴문맥
  instruction: { s: 83.1, z: 1.23, r: 68.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6 Astra (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# GPT-6 Astra (max)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **56.8538559596797**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 긴문맥

## 실용 지표
`입력 $10.0 · 출력 $50.0 · 혼합 $7.7/1M · 42.366580963266536 t/s · TTFT 195.31376830585472s · 1M ctx` · 가성비 7.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 80.0 | +2.0 | 실측 | [[gpqa-diamond]] 96.0606060606061%×0.4, [[humanitys-last-exam]] 54.6802594995366%×0.3 |
| 추론 | 88.6 | +2.57 | 실측 | [[critpt]] 31.7142857142857%×1.0, [[gpqa-diamond]] 96.0606060606061%×1.0, [[humanitys-last-exam]] 54.6802594995366%×1.0 |
| 코딩 | 71.3 | +1.42 | 실측 | [[scicode]] 56.4814814814815%×1.0 |
| 에이전트 | 70.6 | +1.37 | 실측 | [[gdpval]] 1587.0%×1.0, [[tau3-banking]] 41.4432989690722%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 69.6 | +1.31 | 실측 | [[mmmu-pro]] 86.878612716763%×1.0 |
| 긴문맥 | 66.8 | +1.12 | 실측 | [[aa-lcr]] 80.6666666666667%×1.0 |
| 지시 따르기 | 68.4 | +1.23 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
