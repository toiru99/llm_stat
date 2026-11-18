---
type: Model
title: Nova 2.0 Lite (low)
creator: Amazon
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.52
output_speed_tps: 155.14700432308206
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 41.4, z: -0.29, r: 45.7, estimated: false }  # 전문 지식
  reasoning: { s: 24.5, z: -0.55, r: 41.8, estimated: false }  # 추론
  coding: { s: 5.7, z: -1.16, r: 32.6, estimated: false }  # 코딩
  agentic: { s: 39.2, z: -0.2, r: 47.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 58.0, z: -0.69, r: 39.7, estimated: false }  # 멀티모달
  long_context: { s: 61.3, z: 0.23, r: 53.4, estimated: false }  # 긴문맥
  instruction: { s: 69.0, z: 0.63, r: 59.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nova 2.0 Lite (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-18
timestamp: 2026-11-18T00:00:00Z
---

# Nova 2.0 Lite (low)

Amazon · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 멀티모달, 코딩

## 실용 지표
`입력 $0.3 · 출력 $2.5 · 혼합 $0.52/1M · 155.14700432308206 t/s · TTFT 8.877259900730222s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 45.7 | -0.29 | 실측 | [[gpqa-diamond]] 69.7979797979798%×0.4, [[humanitys-last-exam]] 4.03151065801668%×0.3 |
| 추론 | 41.8 | -0.55 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 69.7979797979798%×1.0, [[humanitys-last-exam]] 4.03151065801668%×1.0 |
| 코딩 | 32.6 | -1.16 | 실측 | [[terminal-bench]] 3.78787878787879%×0.5 |
| 에이전트 | 47.0 | -0.2 | 실측 | [[tau2-bench]] 71.92982456140349%×1.0, [[terminal-bench]] 3.78787878787879%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 39.7 | -0.69 | 실측 | [[mmmu-pro]] 57.976878612716796%×1.0 |
| 긴문맥 | 53.4 | +0.23 | 실측 | [[aa-lcr]] 54.3333333333333%×1.0 |
| 지시 따르기 | 59.5 | +0.63 | 실측 | [[ifbench]] 61.2244897959184%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
