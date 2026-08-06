---
type: Model
title: DeepSeek R1 Distill Qwen 32B
creator: DeepSeek
license: Open
intelligence_index: 11.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: past
size_class: Small
params_b: 32
is_reasoning: true
radar:
  knowledge: { s: 38.7, z: -0.13, r: 48.1, estimated: false }  # 전문 지식
  reasoning: { s: 34.8, z: 0.0, r: 50.1, estimated: false }  # 추론
  coding: { s: 63.3, z: 0.66, r: 59.9, estimated: false }  # 코딩
  agentic: { s: 31.1, z: -0.19, r: 47.2, estimated: true }  # 에이전트
  trust: { s: 23.6, z: -0.23, r: 46.5, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 13.2, z: -1.09, r: 33.7, estimated: false }  # 긴문맥
  instruction: { s: 15.5, z: -1.56, r: 26.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek R1 Distill Qwen 32B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-06
timestamp: 2026-08-06T00:00:00Z
---

# DeepSeek R1 Distill Qwen 32B

DeepSeek · Open · Small(32B) · 컨텍스트 128k · 종합지능 **11.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 추론
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 48.1 | -0.13 | 실측 | [[gpqa-diamond]] 62.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 50.1 | +0.0 | 실측 | [[gpqa-diamond]] 62.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 59.9 | +0.66 | 실측 | [[scicode]] 38.0%×1.0 |
| 에이전트 | 47.2 | -0.19 | 추정 | (추정) |
| 신뢰성 | 46.5 | -0.23 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 33.7 | -1.09 | 실측 | [[aa-lcr]] 10.0%×1.0 |
| 지시 따르기 | 26.6 | -1.56 | 실측 | [[ifbench]] 23.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
