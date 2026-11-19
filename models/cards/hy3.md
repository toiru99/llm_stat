---
type: Model
title: Hy3
creator: Tencent
license: Open
intelligence_index: None
price_blended_usd_1m: 0.1065
output_speed_tps: 79.3355708420618
context_window: 256000
status: past
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 71.8, z: 1.18, r: 67.7, estimated: false }  # 전문 지식
  reasoning: { s: 50.1, z: 0.72, r: 60.7, estimated: false }  # 추론
  coding: { s: 68.6, z: 0.97, r: 64.5, estimated: false }  # 코딩
  agentic: { s: 54.6, z: 0.34, r: 55.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 89.1, z: 1.05, r: 65.8, estimated: false }  # 긴문맥
  instruction: { s: 88.4, z: 1.44, r: 71.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Hy3
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-19
timestamp: 2026-11-19T00:00:00Z
---

# Hy3

Tencent · Open · Large · 컨텍스트 256k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 추론, 에이전트

## 실용 지표
`입력 $0.136 · 출력 $0.5549999999999999 · 혼합 $0.1065/1M · 79.3355708420618 t/s · TTFT 4.81391139602308s · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 67.7 | +1.18 | 실측 | [[gpqa-diamond]] 89.6969696969697%×0.4, [[humanitys-last-exam]] 33.4569045412419%×0.3 |
| 추론 | 60.7 | +0.72 | 실측 | [[critpt]] 4.857142857142859%×1.0, [[gpqa-diamond]] 89.6969696969697%×1.0, [[humanitys-last-exam]] 33.4569045412419%×1.0 |
| 코딩 | 64.5 | +0.97 | 실측 | [[scicode]] 48.6111111111111%×1.0 |
| 에이전트 | 55.1 | +0.34 | 실측 | [[gdpval]] 1068.94%×1.0, [[tau3-banking]] 22.886597938144302%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 65.8 | +1.05 | 실측 | [[aa-lcr]] 79.0%×1.0 |
| 지시 따르기 | 71.7 | +1.44 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
