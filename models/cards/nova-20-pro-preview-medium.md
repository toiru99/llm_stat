---
type: Model
title: Nova 2.0 Pro Preview (medium)
creator: Amazon
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.4684
output_speed_tps: 126.0
context_window: 256000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 50.9, z: 0.06, r: 50.9, estimated: false }  # 전문 지식
  reasoning: { s: 46.2, z: 0.02, r: 50.3, estimated: false }  # 추론
  coding: { s: 36.4, z: -0.03, r: 49.6, estimated: false }  # 코딩
  agentic: { s: 31.0, z: -0.11, r: 48.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 68.5, z: -0.18, r: 47.3, estimated: false }  # 멀티모달
  long_context: { s: 71.9, z: 0.59, r: 58.8, estimated: false }  # 긴문맥
  instruction: { s: 94.4, z: 1.75, r: 76.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nova 2.0 Pro Preview (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-29
timestamp: 2026-10-29T00:00:00Z
---

# Nova 2.0 Pro Preview (medium)

Amazon · Proprietary · Unknown · 컨텍스트 256k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 에이전트, 멀티모달

## 실용 지표
`입력 $1.25 · 출력 $10.0 · 혼합 $1.4684/1M · 126.0 t/s · TTFT 10.13s · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 50.9 | +0.06 | 실측 | [[gpqa-diamond]] 78.0%×0.4, [[humanitys-last-exam]] 9.0%×0.3 |
| 추론 | 50.3 | +0.02 | 실측 | [[gpqa-diamond]] 78.0%×1.0, [[humanitys-last-exam]] 9.0%×1.0 |
| 코딩 | 49.6 | -0.03 | 실측 | [[terminal-bench]] 24.0%×0.5 |
| 에이전트 | 48.3 | -0.11 | 실측 | [[gdpval]] 477.0%×1.0, [[terminal-bench]] 24.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 47.3 | -0.18 | 실측 | [[mmmu-pro]] 65.0%×1.0 |
| 긴문맥 | 58.8 | +0.59 | 실측 | [[aa-lcr]] 64.0%×1.0 |
| 지시 따르기 | 76.2 | +1.75 | 실측 | [[ifbench]] 79.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
