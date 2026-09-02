---
type: Model
title: Muse Spark
creator: Meta
license: Proprietary
intelligence_index: 44.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 262000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 77.7, z: 1.86, r: 77.9, estimated: false }  # 전문 지식
  reasoning: { s: 65.0, z: 1.53, r: 73.0, estimated: false }  # 추론
  coding: { s: 78.6, z: 1.35, r: 70.3, estimated: false }  # 코딩
  agentic: { s: 69.4, z: 1.26, r: 68.9, estimated: false }  # 에이전트
  trust: { s: 14.4, z: -0.47, r: 42.9, estimated: false }  # 신뢰성
  multimodal: { s: 94.3, z: 1.14, r: 67.1, estimated: false }  # 멀티모달
  long_context: { s: 92.8, z: 1.31, r: 69.7, estimated: false }  # 긴문맥
  instruction: { s: 90.1, z: 1.57, r: 73.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Muse Spark
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-02
timestamp: 2026-09-02T00:00:00Z
---

# Muse Spark

Meta · Proprietary · Unknown · 컨텍스트 262k · 종합지능 **44.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 지시 따르기
- **약점**: 멀티모달, 신뢰성

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 77.9 | +1.86 | 실측 | [[aa-omniscience]] 50.0%×1.0, [[gpqa-diamond]] 88.0%×0.4, [[humanitys-last-exam]] 41.0%×0.3 |
| 추론 | 73.0 | +1.53 | 실측 | [[critpt]] 11.0%×1.0, [[gpqa-diamond]] 88.0%×1.0, [[humanitys-last-exam]] 41.0%×1.0 |
| 코딩 | 70.3 | +1.35 | 실측 | [[scicode]] 52.0%×1.0, [[terminal-bench]] 45.0%×0.5 |
| 에이전트 | 68.9 | +1.26 | 실측 | [[gdpval]] 32.0%×1.0, [[tau2-bench]] 92.0%×1.0, [[terminal-bench]] 45.0%×1.0 |
| 신뢰성 | 42.9 | -0.47 | 실측 | [[aa-omniscience]] 16.0%×1.0 |
| 멀티모달 | 67.1 | +1.14 | 실측 | [[mmmu-pro]] 81.0%×1.0 |
| 긴문맥 | 69.7 | +1.31 | 실측 | [[aa-lcr]] 77.0%×1.0 |
| 지시 따르기 | 73.5 | +1.57 | 실측 | [[ifbench]] 76.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
