---
type: Model
title: QwQ-32B
creator: Alibaba
license: Open
intelligence_index: 13.0
price_blended_usd_1m: None
output_speed_tps: 30.0
context_window: 131000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 39.1, z: -0.07, r: 48.9, estimated: false }  # 전문 지식
  reasoning: { s: 35.9, z: 0.11, r: 51.7, estimated: false }  # 추론
  coding: { s: 60.0, z: 0.57, r: 58.6, estimated: false }  # 코딩
  agentic: { s: 38.7, z: 0.09, r: 51.4, estimated: true }  # 에이전트
  trust: { s: 20.7, z: -0.31, r: 45.3, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 32.9, z: -0.49, r: 42.7, estimated: false }  # 긴문맥
  instruction: { s: 38.0, z: -0.61, r: 40.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — QwQ-32B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-23
timestamp: 2026-07-23T00:00:00Z
---

# QwQ-32B

Alibaba · Open · Unknown · 컨텍스트 131k · 종합지능 **13.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 추론
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $0.66 · 출력 $1.0 · 혼합 $None/1M · 30.0 t/s · TTFT 2.2s · 131k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 48.9 | -0.07 | 실측 | [[gpqa-diamond]] 59.0%×0.4, [[humanitys-last-exam]] 8.0%×0.3 |
| 추론 | 51.7 | +0.11 | 실측 | [[gpqa-diamond]] 59.0%×1.0, [[humanitys-last-exam]] 8.0%×1.0 |
| 코딩 | 58.6 | +0.57 | 실측 | [[scicode]] 36.0%×1.0 |
| 에이전트 | 51.4 | +0.09 | 추정 | (추정) |
| 신뢰성 | 45.3 | -0.31 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 42.7 | -0.49 | 실측 | [[aa-lcr]] 25.0%×1.0 |
| 지시 따르기 | 40.8 | -0.61 | 실측 | [[ifbench]] 39.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
