---
type: Model
title: Muse Spark
creator: Meta
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 262144
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 75.1, z: 1.38, r: 70.7, estimated: false }  # 전문 지식
  reasoning: { s: 58.9, z: 1.18, r: 67.7, estimated: false }  # 추론
  coding: { s: 69.0, z: 0.94, r: 64.1, estimated: false }  # 코딩
  agentic: { s: 74.5, z: 0.96, r: 64.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 88.0, z: 0.85, r: 62.8, estimated: false }  # 멀티모달
  long_context: { s: 88.0, z: 0.93, r: 63.9, estimated: false }  # 긴문맥
  instruction: { s: 89.6, z: 1.63, r: 74.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Muse Spark
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Muse Spark

Meta · Proprietary · Unknown · 컨텍스트 262k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 긴문맥, 멀티모달

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 70.7 | +1.38 | 실측 | [[gpqa-diamond]] 88.3838%×0.4, [[humanitys-last-exam]] 40.6858%×0.3 |
| 추론 | 67.7 | +1.18 | 실측 | [[critpt]] 11.3306%×1.0, [[gpqa-diamond]] 88.3838%×1.0, [[humanitys-last-exam]] 40.6858%×1.0 |
| 코딩 | 64.1 | +0.94 | 실측 | [[terminal-bench]] 45.4545%×0.5 |
| 에이전트 | 64.5 | +0.96 | 실측 | [[gdpval]] 1005.61 Elo×1.0, [[tau2-bench]] 91.5205%×1.0, [[terminal-bench]] 45.4545%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 62.8 | +0.85 | 실측 | [[mmmu-pro]] 80.5202%×1.0 |
| 긴문맥 | 63.9 | +0.93 | 실측 | [[aa-lcr]] 78%×1.0 |
| 지시 따르기 | 74.4 | +1.63 | 실측 | [[ifbench]] 75.9184%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
