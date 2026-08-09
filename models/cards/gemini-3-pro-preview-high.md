---
type: Model
title: Gemini 3 Pro Preview (high)
creator: Google
license: Proprietary
intelligence_index: 41.0
price_blended_usd_1m: 1.74
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 86.0, z: 2.17, r: 82.5, estimated: false }  # 전문 지식
  reasoning: { s: 65.6, z: 1.52, r: 72.8, estimated: false }  # 추론
  coding: { s: 83.4, z: 1.5, r: 72.5, estimated: false }  # 코딩
  agentic: { s: 75.8, z: 1.59, r: 73.9, estimated: false }  # 에이전트
  trust: { s: 8.1, z: -0.83, r: 37.5, estimated: false }  # 신뢰성
  multimodal: { s: 92.9, z: 1.01, r: 65.2, estimated: false }  # 멀티모달
  long_context: { s: 88.0, z: 1.17, r: 67.6, estimated: false }  # 긴문맥
  instruction: { s: 81.7, z: 1.16, r: 67.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3 Pro Preview (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-09
timestamp: 2026-08-09T00:00:00Z
---

# Gemini 3 Pro Preview (high)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **41.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 에이전트
- **약점**: 멀티모달, 신뢰성

## 실용 지표
`입력 $2.0 · 출력 $12.0 · 혼합 $1.74/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 23.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 82.5 | +2.17 | 실측 | [[aa-omniscience]] 56.0%×1.0, [[gpqa-diamond]] 91.0%×0.4, [[humanitys-last-exam]] 40.0%×0.3 |
| 추론 | 72.8 | +1.52 | 실측 | [[critpt]] 9.0%×1.0, [[gpqa-diamond]] 91.0%×1.0, [[humanitys-last-exam]] 40.0%×1.0 |
| 코딩 | 72.5 | +1.5 | 실측 | [[scicode]] 56.0%×1.0, [[terminal-bench]] 42.0%×0.5 |
| 에이전트 | 73.9 | +1.59 | 실측 | [[tau2-bench]] 87.0%×1.0, [[terminal-bench]] 42.0%×1.0 |
| 신뢰성 | 37.5 | -0.83 | 실측 | [[aa-omniscience]] 9.0%×1.0 |
| 멀티모달 | 65.2 | +1.01 | 실측 | [[mmmu-pro]] 80.0%×1.0 |
| 긴문맥 | 67.6 | +1.17 | 실측 | [[aa-lcr]] 73.0%×1.0 |
| 지시 따르기 | 67.3 | +1.16 | 실측 | [[ifbench]] 70.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
