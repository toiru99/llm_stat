---
type: Model
title: Doubao Seed Code
creator: ByteDance Seed
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 256000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 51.6, z: 0.24, r: 53.5, estimated: false }  # 전문 지식
  reasoning: { s: 31.9, z: -0.16, r: 47.5, estimated: false }  # 추론
  coding: { s: 40.2, z: -0.03, r: 49.6, estimated: false }  # 코딩
  agentic: { s: 49.5, z: 0.08, r: 51.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 71.5, z: 0.0, r: 50.1, estimated: false }  # 멀티모달
  long_context: { s: 80.8, z: 0.71, r: 60.6, estimated: false }  # 긴문맥
  instruction: { s: 55.2, z: 0.2, r: 53.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Doubao Seed Code
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-28
timestamp: 2026-11-28T00:00:00Z
---

# Doubao Seed Code

ByteDance Seed · Proprietary · Unknown · 컨텍스트 256k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 전문 지식
- **약점**: 코딩, 추론

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 53.5 | +0.24 | 실측 | [[gpqa-diamond]] 76.3636%×0.4, [[humanitys-last-exam]] 14.0871%×0.3 |
| 추론 | 47.5 | -0.16 | 실측 | [[critpt]] 0.285714%×1.0, [[gpqa-diamond]] 76.3636%×1.0, [[humanitys-last-exam]] 14.0871%×1.0 |
| 코딩 | 49.6 | -0.03 | 실측 | [[terminal-bench]] 26.5152%×0.5 |
| 에이전트 | 51.2 | +0.08 | 실측 | [[tau2-bench]] 58.1871%×1.0, [[terminal-bench]] 26.5152%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 50.1 | +0.0 | 실측 | [[mmmu-pro]] 68.0925%×1.0 |
| 긴문맥 | 60.6 | +0.71 | 실측 | [[aa-lcr]] 71.6667%×1.0 |
| 지시 따르기 | 53.0 | +0.2 | 실측 | [[ifbench]] 51.4286%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
