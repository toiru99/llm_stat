---
type: Model
title: Claude Opus 4.7 (max)
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 3.85
output_speed_tps: 80.57844509835041
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 78.1, z: 1.48, r: 72.2, estimated: false }  # 전문 지식
  reasoning: { s: 61.4, z: 1.28, r: 69.1, estimated: false }  # 추론
  coding: { s: 78.2, z: 1.29, r: 69.4, estimated: false }  # 코딩
  agentic: { s: 78.2, z: 1.15, r: 67.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 85.8, z: 0.74, r: 61.0, estimated: false }  # 멀티모달
  long_context: { s: 88.7, z: 1.04, r: 65.6, estimated: false }  # 긴문맥
  instruction: { s: 65.3, z: 0.48, r: 57.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 4.7 (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-18
timestamp: 2026-11-18T00:00:00Z
---

# Claude Opus 4.7 (max)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 코딩
- **약점**: 멀티모달, 지시 따르기

## 실용 지표
`입력 $5.0 · 출력 $25.0 · 혼합 $3.85/1M · 80.57844509835041 t/s · TTFT 19.396917246131494s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 72.2 | +1.48 | 실측 | [[gpqa-diamond]] 91.4141414141414%×0.4, [[humanitys-last-exam]] 42.3076923076923%×0.3 |
| 추론 | 69.1 | +1.28 | 실측 | [[critpt]] 12.0%×1.0, [[gpqa-diamond]] 91.4141414141414%×1.0, [[humanitys-last-exam]] 42.3076923076923%×1.0 |
| 코딩 | 69.4 | +1.29 | 실측 | [[terminal-bench]] 51.5151515151515%×0.5 |
| 에이전트 | 67.3 | +1.15 | 실측 | [[gdpval]] 1361.48%×1.0, [[tau2-bench]] 88.59649122807019%×1.0, [[tau3-banking]] 34.639175257732%×1.0, [[terminal-bench]] 51.5151515151515%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 61.0 | +0.74 | 실측 | [[mmmu-pro]] 78.8439306358382%×1.0 |
| 긴문맥 | 65.6 | +1.04 | 실측 | [[aa-lcr]] 78.6666666666667%×1.0 |
| 지시 따르기 | 57.2 | +0.48 | 실측 | [[ifbench]] 58.6394557823129%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
