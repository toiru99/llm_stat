---
type: Model
title: GPT-5.4 mini (medium)
creator: OpenAI
license: Proprietary
intelligence_index: 30.0
price_blended_usd_1m: 0.65
output_speed_tps: 158.0
context_window: 400000
radar:
  knowledge: { s: 60.9, z: 0.2, r: 53.1, estimated: false }  # 전문 지식
  reasoning: { s: 41.9, z: -0.32, r: 45.2, estimated: false }  # 추론
  coding: { s: 66.1, z: 0.09, r: 51.3, estimated: false }  # 코딩
  agentic: { s: 44.4, z: -0.4, r: 44.1, estimated: false }  # 에이전트
  trust: { s: 8.8, z: -0.78, r: 38.3, estimated: false }  # 신뢰성
  multimodal: { s: 77.6, z: -0.08, r: 48.8, estimated: false }  # 멀티모달
  long_context: { s: 82.4, z: 0.31, r: 54.7, estimated: false }  # 긴문맥
  instruction: { s: 74.6, z: 0.22, r: 53.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.4 mini (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-10
timestamp: 2026-07-10T00:00:00Z
---

# GPT-5.4 mini (medium)

OpenAI · Proprietary · 컨텍스트 400k · 종합지능 **30.0**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 지시 따르기
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $0.75 · 출력 $4.5 · 혼합 $0.65/1M · 158.0 t/s · TTFT 6.98s · 400k ctx` · 가성비 46.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 53.1 | +0.2 | 실측 | [[aa-omniscience]] 37.0%×1.0, [[gpqa-diamond]] 82.0%×0.4, [[humanitys-last-exam]] 17.0%×0.3 |
| 추론 | 45.2 | -0.32 | 실측 | [[critpt]] 3.0%×1.0, [[gpqa-diamond]] 82.0%×1.0, [[humanitys-last-exam]] 17.0%×1.0 |
| 코딩 | 51.3 | +0.09 | 실측 | [[scicode]] 44.0%×1.0, [[terminal-bench]] 34.0%×0.5 |
| 에이전트 | 44.1 | -0.4 | 실측 | [[tau2-bench]] 37.0%×1.0, [[terminal-bench]] 34.0%×1.0 |
| 신뢰성 | 38.3 | -0.78 | 실측 | [[aa-omniscience]] 11.0%×1.0 |
| 멀티모달 | 48.8 | -0.08 | 실측 | [[mmmu-pro]] 71.0%×1.0 |
| 긴문맥 | 54.7 | +0.31 | 실측 | [[aa-lcr]] 61.0%×1.0 |
| 지시 따르기 | 53.3 | +0.22 | 실측 | [[ifbench]] 65.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
