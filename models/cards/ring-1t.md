---
type: Model
title: Ring-1T
creator: InclusionAI
license: Open
intelligence_index: 16.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: past
size_class: Large
params_b: 1000
is_reasoning: true
radar:
  knowledge: { s: 39.9, z: -0.04, r: 49.4, estimated: false }  # 전문 지식
  reasoning: { s: 33.5, z: -0.05, r: 49.3, estimated: false }  # 추론
  coding: { s: 44.6, z: -0.12, r: 48.2, estimated: false }  # 코딩
  agentic: { s: 18.4, z: -0.72, r: 39.2, estimated: false }  # 에이전트
  trust: { s: 8.2, z: -0.75, r: 38.7, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 63.9, z: 0.45, r: 56.7, estimated: false }  # 긴문맥
  instruction: { s: 46.5, z: -0.24, r: 46.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Ring-1T
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-28
timestamp: 2026-08-28T00:00:00Z
---

# Ring-1T

InclusionAI · Open · Large(1000B) · 컨텍스트 128k · 종합지능 **16.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 전문 지식
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 49.4 | -0.04 | 실측 | [[aa-omniscience]] 20.0%×1.0, [[gpqa-diamond]] 77.0%×0.4, [[humanitys-last-exam]] 11.0%×0.3 |
| 추론 | 49.3 | -0.05 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 77.0%×1.0, [[humanitys-last-exam]] 11.0%×1.0 |
| 코딩 | 48.2 | -0.12 | 실측 | [[scicode]] 37.0%×1.0, [[terminal-bench]] 7.0%×0.5 |
| 에이전트 | 39.2 | -0.72 | 실측 | [[tau2-bench]] 26.0%×1.0, [[terminal-bench]] 7.0%×1.0 |
| 신뢰성 | 38.7 | -0.75 | 실측 | [[aa-omniscience]] 10.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 56.7 | +0.45 | 실측 | [[aa-lcr]] 53.0%×1.0 |
| 지시 따르기 | 46.3 | -0.24 | 실측 | [[ifbench]] 45.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
