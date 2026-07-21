---
type: Model
title: Kimi K2.5
creator: Kimi
license: Open
intelligence_index: 35.0
price_blended_usd_1m: None
output_speed_tps: 52.0
context_window: 256000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 63.7, z: 1.11, r: 66.7, estimated: false }  # 전문 지식
  reasoning: { s: 52.0, z: 0.96, r: 64.4, estimated: false }  # 추론
  coding: { s: 72.1, z: 1.09, r: 66.3, estimated: false }  # 코딩
  agentic: { s: 51.2, z: 0.58, r: 58.6, estimated: false }  # 에이전트
  trust: { s: 40.0, z: 0.58, r: 58.7, estimated: false }  # 신뢰성
  multimodal: { s: 87.0, z: 0.73, r: 61.0, estimated: false }  # 멀티모달
  long_context: { s: 85.5, z: 1.09, r: 66.3, estimated: false }  # 긴문맥
  instruction: { s: 81.7, z: 1.21, r: 68.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Kimi K2.5
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-21
timestamp: 2026-07-21T00:00:00Z
---

# Kimi K2.5

Kimi · Open · Unknown · 컨텍스트 256k · 종합지능 **35.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $0.6 · 출력 $3.0 · 혼합 $None/1M · 52.0 t/s · TTFT 2.86s · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 66.7 | +1.11 | 실측 | [[aa-omniscience]] 34.0%×1.0, [[gpqa-diamond]] 88.0%×0.4, [[humanitys-last-exam]] 29.0%×0.3 |
| 추론 | 64.4 | +0.96 | 실측 | [[critpt]] 3.0%×1.0, [[gpqa-diamond]] 88.0%×1.0, [[humanitys-last-exam]] 29.0%×1.0 |
| 코딩 | 66.3 | +1.09 | 실측 | [[scicode]] 49.0%×1.0, [[terminal-bench]] 35.0%×0.5 |
| 에이전트 | 58.6 | +0.58 | 실측 | [[apex-agents]] 12.0%×1.0, [[gdpval]] 25.0%×1.0, [[tau2-bench]] 96.0%×1.0, [[tau3-banking]] 14.0%×1.0, [[terminal-bench]] 35.0%×1.0 |
| 신뢰성 | 58.7 | +0.58 | 실측 | [[aa-omniscience]] 35.0%×1.0 |
| 멀티모달 | 61.0 | +0.73 | 실측 | [[mmmu-pro]] 75.0%×1.0 |
| 긴문맥 | 66.3 | +1.09 | 실측 | [[aa-lcr]] 65.0%×1.0 |
| 지시 따르기 | 68.1 | +1.21 | 실측 | [[ifbench]] 70.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
