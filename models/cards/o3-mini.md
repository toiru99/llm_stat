---
type: Model
title: o3-mini
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.045
output_speed_tps: 198.94304013898258
context_window: 200000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 47.0, z: -0.01, r: 49.9, estimated: false }  # 전문 지식
  reasoning: { s: 42.3, z: 0.34, r: 55.2, estimated: false }  # 추론
  coding: { s: 10.3, z: -1.0, r: 35.0, estimated: false }  # 코딩
  agentic: { s: 19.6, z: -0.87, r: 37.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 60.4, z: 0.21, r: 53.2, estimated: true }  # 긴문맥
  instruction: { s: 48.0, z: -0.24, r: 46.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — o3-mini
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# o3-mini

OpenAI · Proprietary · Unknown · 컨텍스트 200k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 긴문맥
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $1.1 · 출력 $4.4 · 혼합 $1.045/1M · 198.94304013898258 t/s · TTFT 5.641311584040468s · 200k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 49.9 | -0.01 | 실측 | [[gpqa-diamond]] 74.8484848484848%×0.4, [[humanitys-last-exam]] 7.91%×0.3 |
| 추론 | 55.2 | +0.34 | 실측 | [[gpqa-diamond]] 74.8484848484848%×1.0, [[humanitys-last-exam]] 7.91%×1.0 |
| 코딩 | 35.0 | -1.0 | 실측 | [[terminal-bench]] 6.81818181818182%×0.5 |
| 에이전트 | 37.0 | -0.87 | 실측 | [[tau2-bench]] 28.6549707602339%×1.0, [[terminal-bench]] 6.81818181818182%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 53.2 | +0.21 | 추정 | (추정) |
| 지시 따르기 | 46.5 | -0.24 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
