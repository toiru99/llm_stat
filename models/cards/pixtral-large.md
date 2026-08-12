---
type: Model
title: Pixtral Large
creator: Mistral
license: Open
intelligence_index: 8.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: past
size_class: Medium
params_b: 124
is_reasoning: false
radar:
  knowledge: { s: 29.5, z: -0.54, r: 41.8, estimated: false }  # 전문 지식
  reasoning: { s: 26.3, z: -0.43, r: 43.6, estimated: false }  # 추론
  coding: { s: 48.3, z: 0.04, r: 50.6, estimated: false }  # 코딩
  agentic: { s: 37.4, z: 0.06, r: 50.8, estimated: false }  # 에이전트
  trust: { s: 35.0, z: 0.4, r: 56.0, estimated: true }  # 신뢰성
  multimodal: { s: 51.4, z: -0.99, r: 35.2, estimated: false }  # 멀티모달
  long_context: { s: 14.5, z: -1.06, r: 34.1, estimated: false }  # 긴문맥
  instruction: { s: 31.0, z: -0.93, r: 36.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Pixtral Large
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-12
timestamp: 2026-08-12T00:00:00Z
---

# Pixtral Large

Mistral · Open · Medium(124B) · 컨텍스트 128k · 종합지능 **8.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 에이전트
- **약점**: 멀티모달, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 41.8 | -0.54 | 실측 | [[gpqa-diamond]] 51.0%×0.4, [[humanitys-last-exam]] 3.0%×0.3 |
| 추론 | 43.6 | -0.43 | 실측 | [[gpqa-diamond]] 51.0%×1.0, [[humanitys-last-exam]] 3.0%×1.0 |
| 코딩 | 50.6 | +0.04 | 실측 | [[scicode]] 29.0%×1.0 |
| 에이전트 | 50.8 | +0.06 | 실측 | [[tau2-bench]] 37.0%×1.0 |
| 신뢰성 | 56.0 | +0.4 | 추정 | (추정) |
| 멀티모달 | 35.2 | -0.99 | 실측 | [[mmmu-pro]] 51.0%×1.0 |
| 긴문맥 | 34.1 | -1.06 | 실측 | [[aa-lcr]] 12.0%×1.0 |
| 지시 따르기 | 36.0 | -0.93 | 실측 | [[ifbench]] 34.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
