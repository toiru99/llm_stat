---
type: Model
title: Solar Pro 3
creator: Upstage
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.1005
output_speed_tps: 115.59668505820048
context_window: 128000
status: past
size_class: Medium
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 46.8, z: -0.03, r: 49.6, estimated: false }  # 전문 지식
  reasoning: { s: 28.3, z: -0.36, r: 44.6, estimated: false }  # 추론
  coding: { s: 24.1, z: -0.54, r: 41.9, estimated: false }  # 코딩
  agentic: { s: 36.2, z: -0.3, r: 45.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 36.5, z: -0.51, r: 42.4, estimated: false }  # 긴문맥
  instruction: { s: 83.0, z: 1.22, r: 68.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Solar Pro 3
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-18
timestamp: 2026-11-18T00:00:00Z
---

# Solar Pro 3

Upstage · Proprietary · Medium · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 긴문맥, 코딩

## 실용 지표
`입력 $0.15 · 출력 $0.6 · 혼합 $0.1005/1M · 115.59668505820048 t/s · TTFT 1.7710309532750068s · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 49.6 | -0.03 | 실측 | [[gpqa-diamond]] 72.42424242424241%×0.4, [[humanitys-last-exam]] 10.2873030583874%×0.3 |
| 추론 | 44.6 | -0.36 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 72.42424242424241%×1.0, [[humanitys-last-exam]] 10.2873030583874%×1.0 |
| 코딩 | 41.9 | -0.54 | 실측 | [[scicode]] 25.462962962962997%×1.0, [[terminal-bench]] 7.57575757575758%×0.5 |
| 에이전트 | 45.5 | -0.3 | 실측 | [[gdpval]] 271.72%×1.0, [[tau2-bench]] 86.2573099415205%×1.0, [[tau3-banking]] 8.65979381443299%×1.0, [[terminal-bench]] 7.57575757575758%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 42.4 | -0.51 | 실측 | [[aa-lcr]] 32.3333333333333%×1.0 |
| 지시 따르기 | 68.3 | +1.22 | 실측 | [[ifbench]] 71.2018140589569%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
