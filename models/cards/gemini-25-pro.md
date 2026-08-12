---
type: Model
title: Gemini 2.5 Pro
creator: Google
license: Proprietary
intelligence_index: 26.0
price_blended_usd_1m: 1.3375
output_speed_tps: 143.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 62.8, z: 1.06, r: 65.9, estimated: false }  # 전문 지식
  reasoning: { s: 46.1, z: 0.55, r: 58.3, estimated: false }  # 추론
  coding: { s: 61.4, z: 0.58, r: 58.7, estimated: false }  # 코딩
  agentic: { s: 31.8, z: -0.17, r: 47.5, estimated: false }  # 에이전트
  trust: { s: 8.1, z: -0.83, r: 37.6, estimated: false }  # 신뢰성
  multimodal: { s: 85.7, z: 0.67, r: 60.0, estimated: false }  # 멀티모달
  long_context: { s: 79.5, z: 0.91, r: 63.7, estimated: false }  # 긴문맥
  instruction: { s: 52.1, z: -0.06, r: 49.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 2.5 Pro
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-12
timestamp: 2026-08-12T00:00:00Z
---

# Gemini 2.5 Pro

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **26.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 긴문맥
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $1.25 · 출력 $10.0 · 혼합 $1.3375/1M · 143.0 t/s · TTFT 22.01s · 1M ctx` · 가성비 19.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 65.9 | +1.06 | 실측 | [[aa-omniscience]] 39.0%×1.0, [[gpqa-diamond]] 84.0%×0.4, [[humanitys-last-exam]] 23.0%×0.3 |
| 추론 | 58.3 | +0.55 | 실측 | [[critpt]] 3.0%×1.0, [[gpqa-diamond]] 84.0%×1.0, [[humanitys-last-exam]] 23.0%×1.0 |
| 코딩 | 58.7 | +0.58 | 실측 | [[scicode]] 43.0%×1.0, [[terminal-bench]] 27.0%×0.5 |
| 에이전트 | 47.5 | -0.17 | 실측 | [[gdpval]] 8.0%×1.0, [[tau2-bench]] 54.0%×1.0, [[tau3-banking]] 10.0%×1.0, [[terminal-bench]] 27.0%×1.0 |
| 신뢰성 | 37.6 | -0.83 | 실측 | [[aa-omniscience]] 9.0%×1.0 |
| 멀티모달 | 60.0 | +0.67 | 실측 | [[mmmu-pro]] 75.0%×1.0 |
| 긴문맥 | 63.7 | +0.91 | 실측 | [[aa-lcr]] 66.0%×1.0 |
| 지시 따르기 | 49.0 | -0.06 | 실측 | [[ifbench]] 49.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
