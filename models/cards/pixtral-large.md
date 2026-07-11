---
type: Model
title: Pixtral Large
creator: Mistral
license: Open
intelligence_index: 8.0
price_blended_usd_1m: 2.4
output_speed_tps: None
context_window: 128000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 30.4, z: -0.48, r: 42.7, estimated: false }  # 전문 지식
  reasoning: { s: 27.3, z: -0.32, r: 45.1, estimated: false }  # 추론
  coding: { s: 48.3, z: 0.1, r: 51.5, estimated: false }  # 코딩
  agentic: { s: 37.4, z: 0.05, r: 50.7, estimated: false }  # 에이전트
  trust: { s: 34.1, z: 0.29, r: 54.4, estimated: true }  # 신뢰성
  multimodal: { s: 52.2, z: -0.92, r: 36.2, estimated: false }  # 멀티모달
  long_context: { s: 13.2, z: -1.04, r: 34.4, estimated: false }  # 긴문맥
  instruction: { s: 31.0, z: -0.88, r: 36.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Pixtral Large
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-11
timestamp: 2026-07-11T00:00:00Z
---

# Pixtral Large

Mistral · Open · Unknown · 컨텍스트 128k · 종합지능 **8.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 멀티모달, 긴문맥

## 실용 지표
`입력 $2.0 · 출력 $6.0 · 혼합 $2.4/1M · None t/s · TTFT Nones · 128k ctx` · 가성비 3.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 42.7 | -0.48 | 실측 | [[gpqa-diamond]] 51.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 45.1 | -0.32 | 실측 | [[gpqa-diamond]] 51.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 51.5 | +0.1 | 실측 | [[scicode]] 29.0%×1.0 |
| 에이전트 | 50.7 | +0.05 | 실측 | [[tau2-bench]] 37.0%×1.0 |
| 신뢰성 | 54.4 | +0.29 | 추정 | (추정) |
| 멀티모달 | 36.2 | -0.92 | 실측 | [[mmmu-pro]] 51.0%×1.0 |
| 긴문맥 | 34.4 | -1.04 | 실측 | [[aa-lcr]] 10.0%×1.0 |
| 지시 따르기 | 36.8 | -0.88 | 실측 | [[ifbench]] 34.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
