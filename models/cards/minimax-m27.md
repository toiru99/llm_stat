---
type: Model
title: MiniMax-M2.7
creator: MiniMax
license: Open
intelligence_index: None
price_blended_usd_1m: 0.222
output_speed_tps: 54.939547070771
context_window: 204800
status: past
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 68.0, z: 1.0, r: 64.9, estimated: false }  # 전문 지식
  reasoning: { s: 43.4, z: 0.39, r: 55.8, estimated: false }  # 추론
  coding: { s: 67.3, z: 0.92, r: 63.9, estimated: false }  # 코딩
  agentic: { s: 56.7, z: 0.41, r: 56.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 88.3, z: 1.03, r: 65.4, estimated: false }  # 긴문맥
  instruction: { s: 89.3, z: 1.48, r: 72.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiniMax-M2.7
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-23
timestamp: 2026-11-23T00:00:00Z
---

# MiniMax-M2.7

MiniMax · Open · Large · 컨텍스트 204k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 에이전트, 추론

## 실용 지표
`입력 $0.3 · 출력 $1.2 · 혼합 $0.222/1M · 54.939547070771 t/s · TTFT 4.1182523073861s · 204k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 64.9 | +1.0 | 실측 | [[gpqa-diamond]] 87.3737373737374%×0.4, [[humanitys-last-exam]] 29.610750695088%×0.3 |
| 추론 | 55.8 | +0.39 | 실측 | [[critpt]] 0.571428571428571%×1.0, [[gpqa-diamond]] 87.3737373737374%×1.0, [[humanitys-last-exam]] 29.610750695088%×1.0 |
| 코딩 | 63.9 | +0.92 | 실측 | [[scicode]] 50.1157407407407%×1.0, [[terminal-bench]] 39.3939393939394%×0.5 |
| 에이전트 | 56.1 | +0.41 | 실측 | [[gdpval]] 1015.49%×1.0, [[tau2-bench]] 84.7953216374269%×1.0, [[tau3-banking]] 9.896907216494839%×1.0, [[terminal-bench]] 39.3939393939394%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 65.4 | +1.03 | 실측 | [[aa-lcr]] 78.3333333333333%×1.0 |
| 지시 따르기 | 72.2 | +1.48 | 실측 | [[ifbench]] 75.7142857142857%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
