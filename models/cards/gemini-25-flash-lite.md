---
type: Model
title: Gemini 2.5 Flash-Lite
creator: Google
license: Proprietary
intelligence_index: 11.0
price_blended_usd_1m: None
output_speed_tps: 290.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 33.2, z: -0.36, r: 44.6, estimated: false }  # 전문 지식
  reasoning: { s: 24.2, z: -0.5, r: 42.6, estimated: false }  # 추론
  coding: { s: 23.6, z: -0.96, r: 35.6, estimated: false }  # 코딩
  agentic: { s: 12.9, z: -0.91, r: 36.4, estimated: false }  # 에이전트
  trust: { s: 27.6, z: 0.01, r: 50.2, estimated: false }  # 신뢰성
  multimodal: { s: 62.3, z: -0.46, r: 43.1, estimated: false }  # 멀티모달
  long_context: { s: 67.1, z: 0.54, r: 58.0, estimated: false }  # 긴문맥
  instruction: { s: 53.5, z: 0.03, r: 50.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 2.5 Flash-Lite
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-23
timestamp: 2026-07-23T00:00:00Z
---

# Gemini 2.5 Flash-Lite

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **11.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 지시 따르기
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $0.1 · 출력 $0.4 · 혼합 $None/1M · 290.0 t/s · TTFT 25.53s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 44.6 | -0.36 | 실측 | [[aa-omniscience]] 18.0%×1.0, [[gpqa-diamond]] 63.0%×0.4, [[humanitys-last-exam]] 6.0%×0.3 |
| 추론 | 42.6 | -0.5 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 63.0%×1.0, [[humanitys-last-exam]] 6.0%×1.0 |
| 코딩 | 35.6 | -0.96 | 실측 | [[scicode]] 19.0%×1.0, [[terminal-bench]] 5.0%×0.5 |
| 에이전트 | 36.4 | -0.91 | 실측 | [[tau2-bench]] 18.0%×1.0, [[terminal-bench]] 5.0%×1.0 |
| 신뢰성 | 50.2 | +0.01 | 실측 | [[aa-omniscience]] 25.0%×1.0 |
| 멀티모달 | 43.1 | -0.46 | 실측 | [[mmmu-pro]] 58.0%×1.0 |
| 긴문맥 | 58.0 | +0.54 | 실측 | [[aa-lcr]] 51.0%×1.0 |
| 지시 따르기 | 50.4 | +0.03 | 실측 | [[ifbench]] 50.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
