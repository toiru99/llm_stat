---
type: Model
title: DeepSeek R1 Distill Llama 8B
creator: DeepSeek
license: Open
intelligence_index: 6.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: past
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 23.3, z: -0.89, r: 36.6, estimated: false }  # 전문 지식
  reasoning: { s: 23.3, z: -0.6, r: 41.0, estimated: false }  # 추론
  coding: { s: 6.7, z: -1.02, r: 34.7, estimated: true }  # 코딩
  agentic: { s: 9.0, z: -1.14, r: 33.0, estimated: true }  # 에이전트
  trust: { s: 26.2, z: -0.01, r: 49.8, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.56, r: 26.6, estimated: false }  # 긴문맥
  instruction: { s: 8.5, z: -1.91, r: 21.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek R1 Distill Llama 8B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-03
timestamp: 2026-10-03T00:00:00Z
---

# DeepSeek R1 Distill Llama 8B

DeepSeek · Open · Small · 컨텍스트 128k · 종합지능 **6.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 36.6 | -0.89 | 실측 | [[gpqa-diamond]] 30.0%×0.4 |
| 추론 | 41.0 | -0.6 | 실측 | [[gpqa-diamond]] 30.0%×1.0 |
| 코딩 | 34.7 | -1.02 | 추정 | (추정) |
| 에이전트 | 33.0 | -1.14 | 추정 | (추정) |
| 신뢰성 | 49.8 | -0.01 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 26.6 | -1.56 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 21.4 | -1.91 | 실측 | [[ifbench]] 18.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
