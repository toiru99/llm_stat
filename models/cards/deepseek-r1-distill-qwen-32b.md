---
type: Model
title: DeepSeek R1 Distill Qwen 32B
creator: DeepSeek
license: Open
intelligence_index: 5.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: past
size_class: Small
params_b: 32
is_reasoning: true
radar:
  knowledge: { s: 37.5, z: -0.16, r: 47.5, estimated: false }  # 전문 지식
  reasoning: { s: 33.7, z: -0.07, r: 49.0, estimated: false }  # 추론
  coding: { s: 7.6, z: -0.86, r: 37.1, estimated: true }  # 코딩
  agentic: { s: 14.1, z: -0.89, r: 36.6, estimated: true }  # 에이전트
  trust: { s: 18.3, z: -0.29, r: 45.6, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 10.1, z: -1.2, r: 32.0, estimated: false }  # 긴문맥
  instruction: { s: 15.5, z: -1.55, r: 26.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek R1 Distill Qwen 32B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# DeepSeek R1 Distill Qwen 32B

DeepSeek · Open · Small(32B) · 컨텍스트 128k · 종합지능 **5.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 47.5 | -0.16 | 실측 | [[gpqa-diamond]] 62.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 49.0 | -0.07 | 실측 | [[gpqa-diamond]] 62.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 37.1 | -0.86 | 추정 | (추정) |
| 에이전트 | 36.6 | -0.89 | 추정 | (추정) |
| 신뢰성 | 45.6 | -0.29 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 32.0 | -1.2 | 실측 | [[aa-lcr]] 9.0%×1.0 |
| 지시 따르기 | 26.7 | -1.55 | 실측 | [[ifbench]] 23.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
