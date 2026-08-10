---
type: Model
title: Nova Pro
creator: Amazon
license: Proprietary
intelligence_index: 7.0
price_blended_usd_1m: 0.62
output_speed_tps: None
context_window: 300000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 26.6, z: -0.68, r: 39.8, estimated: false }  # 전문 지식
  reasoning: { s: 17.1, z: -0.88, r: 36.9, estimated: false }  # 추론
  coding: { s: 26.4, z: -0.87, r: 37.0, estimated: false }  # 코딩
  agentic: { s: 11.6, z: -0.96, r: 35.6, estimated: false }  # 에이전트
  trust: { s: 23.3, z: -0.14, r: 47.9, estimated: false }  # 신뢰성
  multimodal: { s: 41.4, z: -1.46, r: 28.0, estimated: false }  # 멀티모달
  long_context: { s: 26.5, z: -0.69, r: 39.7, estimated: false }  # 긴문맥
  instruction: { s: 36.6, z: -0.7, r: 39.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nova Pro
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-10
timestamp: 2026-08-10T00:00:00Z
---

# Nova Pro

Amazon · Proprietary · Unknown · 컨텍스트 300k · 종합지능 **7.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 전문 지식
- **약점**: 에이전트, 멀티모달

## 실용 지표
`입력 $0.8 · 출력 $3.2 · 혼합 $0.62/1M · None t/s · TTFT Nones · 300k ctx` · 가성비 11.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 39.8 | -0.68 | 실측 | [[aa-omniscience]] 17.0%×1.0, [[gpqa-diamond]] 50.0%×0.4, [[humanitys-last-exam]] 3.0%×0.3 |
| 추론 | 36.9 | -0.88 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 50.0%×1.0, [[humanitys-last-exam]] 3.0%×1.0 |
| 코딩 | 37.0 | -0.87 | 실측 | [[scicode]] 21.0%×1.0, [[terminal-bench]] 6.0%×0.5 |
| 에이전트 | 35.6 | -0.96 | 실측 | [[tau2-bench]] 14.0%×1.0, [[terminal-bench]] 6.0%×1.0 |
| 신뢰성 | 47.9 | -0.14 | 실측 | [[aa-omniscience]] 22.0%×1.0 |
| 멀티모달 | 28.0 | -1.46 | 실측 | [[mmmu-pro]] 44.0%×1.0 |
| 긴문맥 | 39.7 | -0.69 | 실측 | [[aa-lcr]] 22.0%×1.0 |
| 지시 따르기 | 39.5 | -0.7 | 실측 | [[ifbench]] 38.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
