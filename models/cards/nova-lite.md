---
type: Model
title: Nova Lite
creator: Amazon
license: Proprietary
intelligence_index: 7.0
price_blended_usd_1m: 0.0465
output_speed_tps: 163.0
context_window: 300000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 18.4, z: -1.08, r: 33.7, estimated: false }  # 전문 지식
  reasoning: { s: 14.8, z: -1.01, r: 34.9, estimated: false }  # 추론
  coding: { s: 16.1, z: -1.32, r: 30.2, estimated: false }  # 코딩
  agentic: { s: 9.8, z: -1.05, r: 34.2, estimated: false }  # 에이전트
  trust: { s: 46.5, z: 0.86, r: 62.9, estimated: false }  # 신뢰성
  multimodal: { s: 32.9, z: -1.89, r: 21.6, estimated: false }  # 멀티모달
  long_context: { s: 22.9, z: -0.83, r: 37.5, estimated: false }  # 긴문맥
  instruction: { s: 31.0, z: -0.95, r: 35.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nova Lite
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-17
timestamp: 2026-08-17T00:00:00Z
---

# Nova Lite

Amazon · Proprietary · Unknown · 컨텍스트 300k · 종합지능 **7.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 코딩, 멀티모달

## 실용 지표
`입력 $0.06 · 출력 $0.24 · 혼합 $0.0465/1M · 163.0 t/s · TTFT 0.95s · 300k ctx` · 가성비 150.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 33.7 | -1.08 | 실측 | [[aa-omniscience]] 10.0%×1.0, [[gpqa-diamond]] 43.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 34.9 | -1.01 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 43.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 30.2 | -1.32 | 실측 | [[scicode]] 14.0%×1.0, [[terminal-bench]] 1.0%×0.5 |
| 에이전트 | 34.2 | -1.05 | 실측 | [[tau2-bench]] 18.0%×1.0, [[terminal-bench]] 1.0%×1.0 |
| 신뢰성 | 62.9 | +0.86 | 실측 | [[aa-omniscience]] 42.0%×1.0 |
| 멀티모달 | 21.6 | -1.89 | 실측 | [[mmmu-pro]] 38.0%×1.0 |
| 긴문맥 | 37.5 | -0.83 | 실측 | [[aa-lcr]] 19.0%×1.0 |
| 지시 따르기 | 35.8 | -0.95 | 실측 | [[ifbench]] 34.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
