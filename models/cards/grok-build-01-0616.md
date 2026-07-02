---
type: Model
title: Grok Build 0.1 0616
creator: xAI
license: Proprietary
intelligence_index: 40.0
price_blended_usd_1m: 0.54
output_speed_tps: 78.0
context_window: 256000
radar:
  knowledge: { s: 83.0, z: 1.42, r: 71.4, estimated: false }  # 전문 지식
  reasoning: { s: 63.4, z: 0.86, r: 63.0, estimated: false }  # 추론
  coding: { s: 83.3, z: 1.01, r: 65.1, estimated: false }  # 코딩
  agentic: { s: 37.8, z: -0.52, r: 42.2, estimated: false }  # 에이전트
  trust: { s: 7.5, z: -0.95, r: 35.8, estimated: false }  # 신뢰성
  multimodal: { s: 87.9, z: 0.62, r: 59.4, estimated: false }  # 멀티모달
  long_context: { s: 87.8, z: 0.6, r: 59.1, estimated: false }  # 긴문맥
  instruction: { s: 75.5, z: 0.3, r: 54.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok Build 0.1 0616
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-02
timestamp: 2026-07-02T00:00:00Z
---

# Grok Build 0.1 0616

xAI · Proprietary · 컨텍스트 256k · 종합지능 **40.0**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 코딩
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $1.0 · 출력 $2.0 · 혼합 $0.54/1M · 78.0 t/s · TTFT 0.54s · 256k ctx` · 가성비 74.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 71.4 | +1.42 | 실측 | [[aa-omniscience]] 51.0%×1.0, [[gpqa-diamond]] 89.0%×0.4, [[humanitys-last-exam]] 36.0%×0.3 |
| 추론 | 63.0 | +0.86 | 실측 | [[critpt]] 9.0%×1.0, [[gpqa-diamond]] 89.0%×1.0, [[humanitys-last-exam]] 36.0%×1.0 |
| 코딩 | 65.1 | +1.01 | 실측 | [[scicode]] 50.0%×1.0 |
| 에이전트 | 42.2 | -0.52 | 실측 | [[gdpval]] 35.0%×1.0, [[tau3-banking]] 11.0%×1.0 |
| 신뢰성 | 35.8 | -0.95 | 실측 | [[aa-omniscience]] 10.0%×1.0 |
| 멀티모달 | 59.4 | +0.62 | 실측 | [[mmmu-pro]] 77.0%×1.0 |
| 긴문맥 | 59.1 | +0.6 | 실측 | [[aa-lcr]] 65.0%×1.0 |
| 지시 따르기 | 54.4 | +0.3 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
