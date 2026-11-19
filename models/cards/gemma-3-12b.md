---
type: Model
title: Gemma 3 12B
creator: Google
license: Open
intelligence_index: None
price_blended_usd_1m: 0
output_speed_tps: 52.565948093815706
context_window: 128000
status: past
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 18.5, z: -1.39, r: 29.1, estimated: false }  # 전문 지식
  reasoning: { s: 11.1, z: -1.21, r: 31.9, estimated: false }  # 추론
  coding: { s: 10.8, z: -0.99, r: 35.1, estimated: false }  # 코딩
  agentic: { s: 3.3, z: -1.44, r: 28.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 30.7, z: -2.08, r: 18.8, estimated: false }  # 멀티모달
  long_context: { s: 9.4, z: -1.31, r: 30.3, estimated: false }  # 긴문맥
  instruction: { s: 34.6, z: -0.81, r: 37.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemma 3 12B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-19
timestamp: 2026-11-19T00:00:00Z
---

# Gemma 3 12B

Google · Open · Small · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 코딩
- **약점**: 에이전트, 멀티모달

## 실용 지표
`입력 $0.0 · 출력 $0.0 · 혼합 $0/1M · 52.565948093815706 t/s · TTFT 3.30546001064399s · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 29.1 | -1.39 | 실측 | [[gpqa-diamond]] 34.949494949494905%×0.4, [[humanitys-last-exam]] 4.21%×0.3 |
| 추론 | 31.9 | -1.21 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 34.949494949494905%×1.0, [[humanitys-last-exam]] 4.21%×1.0 |
| 코딩 | 35.1 | -0.99 | 실측 | [[scicode]] 16.4351851851852%×1.0, [[terminal-bench]] 0.757575757575758%×0.5 |
| 에이전트 | 28.5 | -1.44 | 실측 | [[gdpval]] -401.45%×1.0, [[tau2-bench]] 10.8187134502924%×1.0, [[tau3-banking]] 0.824742268041237%×1.0, [[terminal-bench]] 0.757575757575758%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 18.8 | -2.08 | 실측 | [[mmmu-pro]] 37.514450867052%×1.0 |
| 긴문맥 | 30.3 | -1.31 | 실측 | [[aa-lcr]] 8.33333333333333%×1.0 |
| 지시 따르기 | 37.9 | -0.81 | 실측 | [[ifbench]] 36.734693877551%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
