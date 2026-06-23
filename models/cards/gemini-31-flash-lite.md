---
type: Model
title: Gemini 3.1 Flash-Lite
creator: Google
license: Proprietary
intelligence_index: 25.0
price_blended_usd_1m: 0.22
output_speed_tps: 334.0
context_window: 1000000
radar:
  knowledge: { s: 59.5, z: 0.37, r: 55.5, estimated: false }  # 전문 지식
  reasoning: { s: 39.2, z: -0.25, r: 46.2, estimated: false }  # 추론
  coding: { s: 59.4, z: -0.0, r: 50.0, estimated: false }  # 코딩
  agentic: { s: 22.3, z: -1.17, r: 32.4, estimated: false }  # 에이전트
  trust: { s: 17.5, z: -0.57, r: 41.4, estimated: false }  # 신뢰성
  multimodal: { s: 86.2, z: 0.57, r: 58.6, estimated: false }  # 멀티모달
  long_context: { s: 87.8, z: 0.62, r: 59.2, estimated: false }  # 긴문맥
  instruction: { s: 91.5, z: 1.03, r: 65.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3.1 Flash-Lite
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-06-23
timestamp: 2026-06-23T00:00:00Z
---

# Gemini 3.1 Flash-Lite

Google · Proprietary · 컨텍스트 1M · 종합지능 **25.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 신뢰성, 에이전트

## 실용 지표
`입력 $0.25 · 출력 $1.5 · 혼합 $0.22/1M · 334.0 t/s · TTFT 5.58s · 1M ctx` · 가성비 113.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 55.5 | +0.37 | 실측 | [[aa-omniscience]] 36.0%×1.0, [[gpqa-diamond]] 82.0%×0.4, [[humanitys-last-exam]] 16.0%×0.3 |
| 추론 | 46.2 | -0.25 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 82.0%×1.0, [[humanitys-last-exam]] 16.0%×1.0 |
| 코딩 | 50.0 | +-0.0 | 실측 | [[scicode]] 42.0%×1.0, [[terminal-bench]] 24.0%×0.5 |
| 에이전트 | 32.4 | -1.17 | 실측 | [[apex-agents]] 12.0%×1.0, [[gdpval]] 5.0%×1.0, [[tau2-bench]] 31.0%×1.0, [[tau3-banking]] 9.0%×1.0, [[terminal-bench]] 24.0%×1.0 |
| 신뢰성 | 41.4 | -0.57 | 실측 | [[aa-omniscience]] 18.0%×1.0 |
| 멀티모달 | 58.6 | +0.57 | 실측 | [[mmmu-pro]] 76.0%×1.0 |
| 긴문맥 | 59.2 | +0.62 | 실측 | [[aa-lcr]] 65.0%×1.0 |
| 지시 따르기 | 65.4 | +1.03 | 실측 | [[ifbench]] 77.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
