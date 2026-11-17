---
type: Model
title: Mistral Large 4 Preview
creator: Mistral
license: Proprietary
intelligence_index: 25.336451488165
price_blended_usd_1m: 0.399
output_speed_tps: 90.22145273408428
context_window: 524288
status: past
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 46.4, z: -0.03, r: 49.5, estimated: false }  # 전문 지식
  reasoning: { s: 38.0, z: 0.13, r: 52.0, estimated: false }  # 추론
  coding: { s: 77.7, z: 1.29, r: 69.4, estimated: false }  # 코딩
  agentic: { s: 80.8, z: 1.26, r: 68.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 82.8, z: 0.59, r: 58.9, estimated: false }  # 멀티모달
  long_context: { s: 91.7, z: 1.14, r: 67.1, estimated: false }  # 긴문맥
  instruction: { s: 53.4, z: -0.01, r: 49.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mistral Large 4 Preview
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Mistral Large 4 Preview

Mistral · Proprietary · Large · 컨텍스트 524k · 종합지능 **25.336451488165** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 에이전트
- **약점**: 지시 따르기, 전문 지식

## 실용 지표
`입력 $0.7 · 출력 $2.1 · 혼합 $0.399/1M · 90.22145273408428 t/s · TTFT 3.429099284377818s · 524k ctx` · 가성비 63.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 49.5 | -0.03 | 실측 | [[humanitys-last-exam]] 35.032437442075995%×0.3 |
| 추론 | 52.0 | +0.13 | 실측 | [[critpt]] 10.5714285714286%×1.0, [[humanitys-last-exam]] 35.032437442075995%×1.0 |
| 코딩 | 69.4 | +1.29 | 실측 | [[scicode]] 54.1666666666667%×1.0 |
| 에이전트 | 68.8 | +1.26 | 실측 | [[gdpval]] 1431.08%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 58.9 | +0.59 | 실측 | [[mmmu-pro]] 76.4161849710983%×1.0 |
| 긴문맥 | 67.1 | +1.14 | 실측 | [[aa-lcr]] 81.3333333333333%×1.0 |
| 지시 따르기 | 49.8 | -0.01 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
