---
type: Model
title: Nova Pro
creator: Amazon
license: Proprietary
intelligence_index: 8.0
price_blended_usd_1m: 0.62
output_speed_tps: None
context_window: 300000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 27.6, z: -0.63, r: 40.6, estimated: false }  # 전문 지식
  reasoning: { s: 17.2, z: -0.87, r: 37.0, estimated: false }  # 추론
  coding: { s: 26.4, z: -0.84, r: 37.4, estimated: false }  # 코딩
  agentic: { s: 11.6, z: -0.96, r: 35.6, estimated: false }  # 에이전트
  trust: { s: 24.7, z: -0.15, r: 47.8, estimated: false }  # 신뢰성
  multimodal: { s: 42.0, z: -1.41, r: 28.8, estimated: false }  # 멀티모달
  long_context: { s: 25.0, z: -0.69, r: 39.6, estimated: false }  # 긴문맥
  instruction: { s: 36.6, z: -0.65, r: 40.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nova Pro
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-16
timestamp: 2026-07-16T00:00:00Z
---

# Nova Pro

Amazon · Proprietary · Unknown · 컨텍스트 300k · 종합지능 **8.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 전문 지식
- **약점**: 에이전트, 멀티모달

## 실용 지표
`입력 $0.8 · 출력 $3.2 · 혼합 $0.62/1M · None t/s · TTFT Nones · 300k ctx` · 가성비 12.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 40.6 | -0.63 | 실측 | [[aa-omniscience]] 17.0%×1.0, [[gpqa-diamond]] 50.0%×0.4, [[humanitys-last-exam]] 3.0%×0.3 |
| 추론 | 37.0 | -0.87 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 50.0%×1.0, [[humanitys-last-exam]] 3.0%×1.0 |
| 코딩 | 37.4 | -0.84 | 실측 | [[scicode]] 21.0%×1.0, [[terminal-bench]] 6.0%×0.5 |
| 에이전트 | 35.6 | -0.96 | 실측 | [[tau2-bench]] 14.0%×1.0, [[terminal-bench]] 6.0%×1.0 |
| 신뢰성 | 47.8 | -0.15 | 실측 | [[aa-omniscience]] 22.0%×1.0 |
| 멀티모달 | 28.8 | -1.41 | 실측 | [[mmmu-pro]] 44.0%×1.0 |
| 긴문맥 | 39.6 | -0.69 | 실측 | [[aa-lcr]] 19.0%×1.0 |
| 지시 따르기 | 40.3 | -0.65 | 실측 | [[ifbench]] 38.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
