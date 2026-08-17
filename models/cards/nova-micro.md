---
type: Model
title: Nova Micro
creator: Amazon
license: Proprietary
intelligence_index: 4.0
price_blended_usd_1m: 0.0271
output_speed_tps: 300.0
context_window: 130000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 16.8, z: -1.16, r: 32.6, estimated: false }  # 전문 지식
  reasoning: { s: 12.7, z: -1.11, r: 33.4, estimated: false }  # 추론
  coding: { s: 11.0, z: -1.52, r: 27.1, estimated: false }  # 코딩
  agentic: { s: 8.6, z: -1.1, r: 33.5, estimated: false }  # 에이전트
  trust: { s: 38.4, z: 0.5, r: 57.5, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 13.3, z: -1.12, r: 33.2, estimated: false }  # 긴문맥
  instruction: { s: 23.9, z: -1.23, r: 31.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nova Micro
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-17
timestamp: 2026-08-17T00:00:00Z
---

# Nova Micro

Amazon · Proprietary · Unknown · 컨텍스트 130k · 종합지능 **4.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 에이전트
- **약점**: 지시 따르기, 코딩

## 실용 지표
`입력 $0.04 · 출력 $0.14 · 혼합 $0.0271/1M · 300.0 t/s · TTFT 0.87s · 130k ctx` · 가성비 147.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 32.6 | -1.16 | 실측 | [[aa-omniscience]] 10.0%×1.0, [[gpqa-diamond]] 36.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 33.4 | -1.11 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 36.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 27.1 | -1.52 | 실측 | [[scicode]] 9.0%×1.0, [[terminal-bench]] 2.0%×0.5 |
| 에이전트 | 33.5 | -1.1 | 실측 | [[tau2-bench]] 14.0%×1.0, [[terminal-bench]] 2.0%×1.0 |
| 신뢰성 | 57.5 | +0.5 | 실측 | [[aa-omniscience]] 35.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 33.2 | -1.12 | 실측 | [[aa-lcr]] 11.0%×1.0 |
| 지시 따르기 | 31.5 | -1.23 | 실측 | [[ifbench]] 29.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
