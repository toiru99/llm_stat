---
type: Model
title: Gemini 2.5 Flash-Lite (Sep)
creator: Google
license: Proprietary
intelligence_index: 10.0
price_blended_usd_1m: 0.067
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 34.3, z: -0.37, r: 44.4, estimated: false }  # 전문 지식
  reasoning: { s: 27.0, z: -0.42, r: 43.7, estimated: false }  # 추론
  coding: { s: 19.7, z: -0.56, r: 41.7, estimated: false }  # 코딩
  agentic: { s: 25.5, z: -0.49, r: 42.6, estimated: false }  # 에이전트
  trust: { s: 10.3, z: -0.74, r: 38.8, estimated: false }  # 신뢰성
  multimodal: { s: 68.5, z: -0.12, r: 48.2, estimated: false }  # 멀티모달
  long_context: { s: 73.0, z: 0.66, r: 59.9, estimated: false }  # 긴문맥
  instruction: { s: 57.7, z: 0.16, r: 52.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 2.5 Flash-Lite (Sep)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-30
timestamp: 2026-09-30T00:00:00Z
---

# Gemini 2.5 Flash-Lite (Sep)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **10.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 지시 따르기
- **약점**: 코딩, 신뢰성

## 실용 지표
`입력 $0.1 · 출력 $0.4 · 혼합 $0.067/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 149.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 44.4 | -0.37 | 실측 | [[aa-omniscience]] 18.0%×1.0, [[gpqa-diamond]] 71.0%×0.4, [[humanitys-last-exam]] 7.0%×0.3 |
| 추론 | 43.7 | -0.42 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 71.0%×1.0, [[humanitys-last-exam]] 7.0%×1.0 |
| 코딩 | 41.7 | -0.56 | 실측 | [[terminal-bench]] 13.0%×0.5 |
| 에이전트 | 42.6 | -0.49 | 실측 | [[tau2-bench]] 31.0%×1.0, [[terminal-bench]] 13.0%×1.0 |
| 신뢰성 | 38.8 | -0.74 | 실측 | [[aa-omniscience]] 12.0%×1.0 |
| 멀티모달 | 48.2 | -0.12 | 실측 | [[mmmu-pro]] 65.0%×1.0 |
| 긴문맥 | 59.9 | +0.66 | 실측 | [[aa-lcr]] 65.0%×1.0 |
| 지시 따르기 | 52.4 | +0.16 | 실측 | [[ifbench]] 53.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
