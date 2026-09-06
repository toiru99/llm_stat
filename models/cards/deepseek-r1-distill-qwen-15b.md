---
type: Model
title: DeepSeek R1 Distill Qwen 1.5B
creator: DeepSeek
license: Open
intelligence_index: 1.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: past
size_class: Tiny
params_b: 1.5
is_reasoning: true
radar:
  knowledge: { s: 1.5, z: -1.9, r: 21.5, estimated: false }  # 전문 지식
  reasoning: { s: 1.7, z: -1.6, r: 25.9, estimated: false }  # 추론
  coding: { s: 0.0, z: -1.12, r: 33.2, estimated: true }  # 코딩
  agentic: { s: 7.9, z: -1.13, r: 33.0, estimated: true }  # 에이전트
  trust: { s: 26.6, z: 0.1, r: 51.5, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 2.2, z: -1.44, r: 28.4, estimated: false }  # 긴문맥
  instruction: { s: 1.4, z: -2.14, r: 17.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek R1 Distill Qwen 1.5B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# DeepSeek R1 Distill Qwen 1.5B

DeepSeek · Open · Tiny(1.5B) · 컨텍스트 128k · 종합지능 **1.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 전문 지식, 지시 따르기

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 21.5 | -1.9 | 실측 | [[gpqa-diamond]] 10.0%×0.4, [[humanitys-last-exam]] 3.0%×0.3 |
| 추론 | 25.9 | -1.6 | 실측 | [[gpqa-diamond]] 10.0%×1.0, [[humanitys-last-exam]] 3.0%×1.0 |
| 코딩 | 33.2 | -1.12 | 추정 | (추정) |
| 에이전트 | 33.0 | -1.13 | 추정 | (추정) |
| 신뢰성 | 51.5 | +0.1 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 28.4 | -1.44 | 실측 | [[aa-lcr]] 2.0%×1.0 |
| 지시 따르기 | 17.9 | -2.14 | 실측 | [[ifbench]] 13.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
