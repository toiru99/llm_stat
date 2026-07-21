---
type: Model
title: Gemma 3n E4B
creator: Google
license: Open
intelligence_index: 1.0
price_blended_usd_1m: None
output_speed_tps: 56.0
context_window: 32000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 13.5, z: -1.31, r: 30.4, estimated: false }  # 전문 지식
  reasoning: { s: 9.9, z: -1.25, r: 31.2, estimated: false }  # 추론
  coding: { s: 9.9, z: -1.54, r: 27.0, estimated: false }  # 코딩
  agentic: { s: 2.7, z: -1.31, r: 30.4, estimated: false }  # 에이전트
  trust: { s: 3.5, z: -1.14, r: 32.8, estimated: false }  # 신뢰성
  multimodal: { s: 15.9, z: -2.66, r: 10.0, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.45, r: 28.3, estimated: false }  # 긴문맥
  instruction: { s: 22.5, z: -1.24, r: 31.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemma 3n E4B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-21
timestamp: 2026-07-21T00:00:00Z
---

# Gemma 3n E4B

Google · Open · Unknown · 컨텍스트 32k · 종합지능 **1.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 코딩, 멀티모달

## 실용 지표
`입력 $0.02 · 출력 $0.04 · 혼합 $None/1M · 56.0 t/s · TTFT 1.21s · 32k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 30.4 | -1.31 | 실측 | [[aa-omniscience]] 8.0%×1.0, [[gpqa-diamond]] 30.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 31.2 | -1.25 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 30.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 27.0 | -1.54 | 실측 | [[scicode]] 8.0%×1.0, [[terminal-bench]] 2.0%×0.5 |
| 에이전트 | 30.4 | -1.31 | 실측 | [[tau2-bench]] 5.0%×1.0, [[tau3-banking]] 0.0%×1.0, [[terminal-bench]] 2.0%×1.0 |
| 신뢰성 | 32.8 | -1.14 | 실측 | [[aa-omniscience]] 4.0%×1.0 |
| 멀티모달 | 10.0 | -2.66 | 실측 | [[mmmu-pro]] 26.0%×1.0 |
| 긴문맥 | 28.3 | -1.45 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 31.3 | -1.24 | 실측 | [[ifbench]] 28.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
