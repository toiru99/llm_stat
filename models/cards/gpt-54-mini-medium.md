---
type: Model
title: GPT-5.4 mini (medium)
creator: OpenAI
license: Proprietary
intelligence_index: 30.0
price_blended_usd_1m: 0.65
output_speed_tps: 165.0
context_window: 400000
radar:
  knowledge: { s: 60.9, z: 0.4, r: 56.1, estimated: false }  # 전문 지식
  reasoning: { s: 42.0, z: -0.16, r: 47.6, estimated: false }  # 추론
  coding: { s: 66.9, z: 0.28, r: 54.2, estimated: false }  # 코딩
  agentic: { s: 45.7, z: -0.21, r: 46.8, estimated: false }  # 에이전트
  trust: { s: 8.8, z: -0.91, r: 36.4, estimated: false }  # 신뢰성
  multimodal: { s: 77.6, z: 0.08, r: 51.3, estimated: false }  # 멀티모달
  long_context: { s: 82.4, z: 0.41, r: 56.1, estimated: false }  # 긴문맥
  instruction: { s: 74.6, z: 0.26, r: 53.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.4 mini (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-02
timestamp: 2026-07-02T00:00:00Z
---

# GPT-5.4 mini (medium)

OpenAI · Proprietary · 컨텍스트 400k · 종합지능 **30.0**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 전문 지식
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $0.75 · 출력 $4.5 · 혼합 $0.65/1M · 165.0 t/s · TTFT 11.74s · 400k ctx` · 가성비 46.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 56.1 | +0.4 | 실측 | [[aa-omniscience]] 37.0%×1.0, [[gpqa-diamond]] 82.0%×0.4, [[humanitys-last-exam]] 17.0%×0.3 |
| 추론 | 47.6 | -0.16 | 실측 | [[critpt]] 3.0%×1.0, [[gpqa-diamond]] 82.0%×1.0, [[humanitys-last-exam]] 17.0%×1.0 |
| 코딩 | 54.2 | +0.28 | 실측 | [[scicode]] 44.0%×1.0, [[terminal-bench]] 34.0%×0.5 |
| 에이전트 | 46.8 | -0.21 | 실측 | [[tau2-bench]] 37.0%×1.0, [[terminal-bench]] 34.0%×1.0 |
| 신뢰성 | 36.4 | -0.91 | 실측 | [[aa-omniscience]] 11.0%×1.0 |
| 멀티모달 | 51.3 | +0.08 | 실측 | [[mmmu-pro]] 71.0%×1.0 |
| 긴문맥 | 56.1 | +0.41 | 실측 | [[aa-lcr]] 61.0%×1.0 |
| 지시 따르기 | 53.9 | +0.26 | 실측 | [[ifbench]] 65.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
