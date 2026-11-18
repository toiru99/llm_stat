---
type: Model
title: DeepSeek R1 Distill Qwen 32B
creator: DeepSeek
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: past
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 36.2, z: -0.53, r: 42.0, estimated: false }  # 전문 지식
  reasoning: { s: 32.3, z: -0.16, r: 47.6, estimated: false }  # 추론
  coding: { s: 10.5, z: -1.0, r: 35.0, estimated: true }  # 코딩
  agentic: { s: 13.4, z: -1.09, r: 33.7, estimated: true }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 9.8, z: -1.3, r: 30.5, estimated: false }  # 긴문맥
  instruction: { s: 15.2, z: -1.62, r: 25.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek R1 Distill Qwen 32B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-18
timestamp: 2026-11-18T00:00:00Z
---

# DeepSeek R1 Distill Qwen 32B

DeepSeek · Open · Small · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 42.0 | -0.53 | 실측 | [[gpqa-diamond]] 61.5151515151515%×0.4, [[humanitys-last-exam]] 4.58%×0.3 |
| 추론 | 47.6 | -0.16 | 실측 | [[gpqa-diamond]] 61.5151515151515%×1.0, [[humanitys-last-exam]] 4.58%×1.0 |
| 코딩 | 35.0 | -1.0 | 추정 | (추정) |
| 에이전트 | 33.7 | -1.09 | 추정 | (추정) |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 30.5 | -1.3 | 실측 | [[aa-lcr]] 8.66666666666667%×1.0 |
| 지시 따르기 | 25.7 | -1.62 | 실측 | [[ifbench]] 22.9251700680272%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
