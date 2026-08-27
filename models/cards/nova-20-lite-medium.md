---
type: Model
title: Nova 2.0 Lite (medium)
creator: Amazon
license: Proprietary
intelligence_index: 19.0
price_blended_usd_1m: 0.52
output_speed_tps: 186.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 36.8, z: -0.22, r: 46.7, estimated: false }  # 전문 지식
  reasoning: { s: 31.2, z: -0.22, r: 46.7, estimated: false }  # 추론
  coding: { s: 49.7, z: 0.04, r: 50.6, estimated: false }  # 코딩
  agentic: { s: 51.3, z: 0.54, r: 58.1, estimated: false }  # 에이전트
  trust: { s: 7.0, z: -0.92, r: 36.3, estimated: false }  # 신뢰성
  multimodal: { s: 68.6, z: -0.2, r: 47.0, estimated: false }  # 멀티모달
  long_context: { s: 72.3, z: 0.64, r: 59.6, estimated: false }  # 긴문맥
  instruction: { s: 80.3, z: 1.05, r: 65.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nova 2.0 Lite (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-27
timestamp: 2026-08-27T00:00:00Z
---

# Nova 2.0 Lite (medium)

Amazon · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **19.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 추론, 신뢰성

## 실용 지표
`입력 $0.3 · 출력 $2.5 · 혼합 $0.52/1M · 186.0 t/s · TTFT 16.46s · 1M ctx` · 가성비 36.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 46.7 | -0.22 | 실측 | [[aa-omniscience]] 18.0%×1.0, [[gpqa-diamond]] 77.0%×0.4, [[humanitys-last-exam]] 9.0%×0.3 |
| 추론 | 46.7 | -0.22 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 77.0%×1.0, [[humanitys-last-exam]] 9.0%×1.0 |
| 코딩 | 50.6 | +0.04 | 실측 | [[scicode]] 37.0%×1.0, [[terminal-bench]] 17.0%×0.5 |
| 에이전트 | 58.1 | +0.54 | 실측 | [[tau2-bench]] 76.0%×1.0, [[terminal-bench]] 17.0%×1.0 |
| 신뢰성 | 36.3 | -0.92 | 실측 | [[aa-omniscience]] 8.0%×1.0 |
| 멀티모달 | 47.0 | -0.2 | 실측 | [[mmmu-pro]] 63.0%×1.0 |
| 긴문맥 | 59.6 | +0.64 | 실측 | [[aa-lcr]] 60.0%×1.0 |
| 지시 따르기 | 65.8 | +1.05 | 실측 | [[ifbench]] 69.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
